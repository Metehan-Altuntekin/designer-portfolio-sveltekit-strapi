import type { Service, Skill, Tag } from '../types'
import type { Writable, Readable } from 'svelte/store'
import { writable, derived, get } from 'svelte/store'

import services from './services'
import skills, { getSkill } from './skills'

export const portfolioOpen: Writable<boolean> = writable(false)

export function openPortfolio(): void {
  portfolioOpen.set(true)
  window.location.hash = 'portfolio' // set hash when project is selected

  // when hash changes, close modal
  window.onhashchange = (e: HashChangeEvent) => {
    if (e.oldURL.includes('portfolio')) closePortfolio() // close modal if hash is changed from portfolio
  }
}

export function closePortfolio(): void {
  portfolioOpen.set(false)

  // replace url with no hash
  if (window.location.hash.includes('portfolio')) {
    window.history.replaceState(null, '', window.location.pathname)
  }
}

//

export const filterParams: Writable<{
  services: number[]
  skills: number[]
  tags: string[]
}> = writable({ services: [], skills: [], tags: [] })

export const filterOptions: Readable<{ services: Service[]; skills: Skill[]; tags: Tag[] }> = derived(
  [filterParams, services],
  ([$filterParams, $services]) => ({
    services: $services,
    skills: [
      ...new Set(
        $services
          .filter((s) => ($filterParams.services.length > 0 ? $filterParams.services.includes(s.id) : true))
          .reduce((prev, curr) => [...prev, ...curr.relatedSkills.map((s) => getSkill(s))], [])
      ),
    ].sort((a, b) => a.id - b.id),

    tags: [
      ...new Set(
        $services
          .filter((s) => ($filterParams.services.length > 0 ? $filterParams.services.includes(s.id) : true))
          .reduce((prev, curr) => [...prev, ...curr.relatedTags.map((tag) => tag)], [])
      ),
    ].sort(),
  })
)
