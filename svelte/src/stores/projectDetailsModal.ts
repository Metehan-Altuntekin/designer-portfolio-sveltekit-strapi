import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

import type { Project } from '../types'

export const selectedProject: Writable<Project | null> = writable(null)

export function openModal(project: Project): void {
  selectedProject.set(project)
}

export function closeModal(): void {
  selectedProject.set(null)
  // replace url with no hash
  window.history.replaceState(null, '', window.location.pathname)
}
