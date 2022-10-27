import type { Writable, Readable } from 'svelte/store'
import { writable } from 'svelte/store'

import uniqid from 'uniqid'

const DISPLAY_DURATION = 5000
const PROGRESS_DISPLAY_DURATION_AFTER_COMPLETE = 2000

export interface Notification {
  id: string
  title: string
  message?: string
  type: 'success' | 'error' | 'info' | 'warning'

  progressStore?: Writable<number> | Readable<number> // optional progress store to show a progress bar
  progress?: number // optional progress value to show a progress bar
}

export const notifications: Writable<Notification[]> = writable([])

//

export function createNotification(properties: Omit<Notification, 'id'> & { duration?: number }) {
  const notification: Notification = {
    ...properties,
    id: uniqid(),
  }

  notifications.update((curr) => {
    // if it's a progress notification, we need to subscribe to progressStore to update the progress value
    if (notification.progressStore) {
      notification.progressStore.subscribe((value) => {
        console.info(notification.title, value)

        notifications.update((curr) => {
          const index = curr.findIndex((n) => n.id === notification.id)
          if (index !== -1) {
            curr[index].progress = value
          }
          return curr
        })
      })
    }

    return [notification, ...curr]
  })

  // set timeout to remove notification after 5 seconds if it's not a progress notification
  if (notification.progressStore === undefined) {
    setTimeout(() => {
      notifications.update((notifications) => {
        return notifications.filter((n) => n !== notification)
      })
    }, properties.duration ?? DISPLAY_DURATION)
  }

  // if it's a progress store, remove the notification when the progress store is 1
  if (notification.progressStore !== undefined) {
    notification.progressStore.subscribe((progress) => {
      if (progress >= 1) {
        setTimeout(() => {
          notifications.update((notifications) => {
            return notifications.filter((n) => n !== notification)
          })
        }, properties.duration ?? PROGRESS_DISPLAY_DURATION_AFTER_COMPLETE)
      }
    })
  }
}

export function deleteNotification(notificationId: string) {
  notifications.update((notifications) => {
    return notifications.filter((n) => n.id !== notificationId)
  })
}

// update a notification
export function updateNotification(notificationId: string, update: Partial<Notification>) {
  notifications.update((notifications) => {
    return notifications.map((n) => {
      if (n.id === notificationId) {
        return { ...n, ...update }
      }
      return n
    })
  })
}
