import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

import type { Project } from '$lib/types'

export const selectedProject: Writable<Project | null> = writable(null)

export function openModal(project: Project): void {
  selectedProject.set(project)
  window.location.hash = 'project-details' // set hash when project is selected

  document.documentElement.style.overflow = 'hidden' // disable scroll when modal is open

  // when hash changes, close modal
  window.onhashchange = (e: HashChangeEvent) => {
    if (e.oldURL.includes('project-details')) closeModal() // close modal if hash is changed from project-details
  }
}

export function closeModal(): void {
  selectedProject.set(null)

  document.documentElement.style.overflow = 'auto' // enable scroll when modal is closed

  // replace url with no hash
  if (window.location.hash.includes('project-details')) {
    window.history.replaceState(null, '', window.location.pathname)
  }
}
