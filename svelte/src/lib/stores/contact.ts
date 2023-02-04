import axios from 'axios'
import * as zod from 'zod'
import type { AxiosProgressEvent } from 'axios'

import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

import { API_ROUTES } from '$lib/config'
import { createNotification, deleteNotification } from '$lib/stores/notification'

// regex to match phone numbers in the formats:
// +1 (555) 555-5555
// 555-555-5555
// 5555555555
// 555 555 5555
// (555)555-5555
// 1-555-555-5555
// 555 55 55
const TEL_REGEX = /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\s.]|\d)+$/
export const FILES_TOTAL_MAX_SIZE = 1000 * 1000 * 100 // 100MB

// Validation schema
export const schema = zod.object({
  fullName: zod.string().min(4, 'Name should be at least 4 characters').max(30, 'Name should be at most 30 characters'),

  email: zod.string().email('Email should be a valid email address'),

  // tel is either a valid phone number or empty
  tel: zod
    .union([
      zod
        .string()
        .min(7, "Number can't be less than 7 characters")
        .max(20, 'Number should be at most 20 characters.')
        .regex(TEL_REGEX, 'Phone number is not valid'),
      zod.string().length(0),
    ])
    .optional(),

  message: zod
    .string()
    .min(10, 'Your message must be at least 10 characters')
    .max(1000, 'Your message must be at most 1000 characters'),

  files: zod
    .array(zod.any())
    .refine((files) => files.length <= 5, {
      message: 'You can only upload a maximum of 5 files',
    })
    .refine((files) => files.reduce((acc, file) => acc + file.size, 0) <= FILES_TOTAL_MAX_SIZE, {
      message: `Total size of files should be at most ${FILES_TOTAL_MAX_SIZE / 1000 / 1000}MB`,
    }),
})

export type Schema = zod.infer<typeof schema>

// --------------------------------------------

// Errors store
export const errors: Writable<{
  [key in keyof Schema]?: string
}> = writable({})

async function validate<T extends Schema>(data: T) {
  try {
    await schema.parseAsync(data)
  } catch (error) {
    errors.set(error.formErrors.fieldErrors)
    throw error
  }
  errors.set({})
}

// --------------------------------------------

// track progress of file uploads
export const progressStore: Writable<number> = writable(0)

export const pending = writable(false)

// Send contact form data to the server
// includes big file so we need to track progress
export async function sendMessage(message: Schema) {
  // Validate data
  await validate(message)

  progressStore.set(0)
  pending.set(true)

  // set notification to show progress bar
  const progressNotification = createNotification({
    title: 'Sending message...',
    type: 'info',
    progressStore,
  })

  // Prepare data
  const formData = new FormData()

  // Strapi expects data to be a stringified JSON object, except for files
  formData.append(
    'data',
    JSON.stringify({
      fullName: message.fullName || undefined,
      email: message.email || undefined,
      tel: message.tel || undefined,
      message: message.message || undefined,
    })
  )
  if (message.files) message.files.forEach((file) => formData.append(`files.files`, file, file.name))

  try {
    // Create request
    const config = {
      onUploadProgress: function (progressEvent: AxiosProgressEvent) {
        if (progressEvent.total) {
          progressStore.set(Math.round(progressEvent.loaded / progressEvent.total))
        }
      },
    }

    const response = await axios.post(API_ROUTES.visitorMessage, formData, config)

    progressStore.set(1)
    pending.set(false)

    if (response.status === 200) {
      // show success notification
      deleteNotification(progressNotification.id)
      createNotification({
        title: 'Message sent!',
        type: 'success',
      })
    } else {
      // show error notification
      deleteNotification(progressNotification.id)
      createNotification({
        title: 'Error sending message',
        message: response.data.message,
        type: 'error',
      })
    }
  } catch (error) {
    progressStore.set(0)
    pending.set(false)

    // delete notification
    deleteNotification(progressNotification.id)
    // show error notification
    createNotification({
      title: 'Error sending message',
      type: 'error',
    })

    throw error
  }
}
