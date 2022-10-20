import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

import type { Project } from '$lib/types'

export const selectedProject: Writable<Project | null> = writable(null)

export function openModal(project: Project): void {
  selectedProject.set(project)
  window.location.hash = 'project-details' // set hash when project is selected

  // when hash changes, close modal
  window.onhashchange = (e: HashChangeEvent) => {
    if (e.oldURL.includes('project-details')) closeModal() // close modal if hash is changed from project-details
  }
}

export function closeModal(): void {
  selectedProject.set(null)

  // replace url with no hash
  if (window.location.hash.includes('project-details')) {
    window.history.replaceState(null, '', window.location.pathname)
  }
}
