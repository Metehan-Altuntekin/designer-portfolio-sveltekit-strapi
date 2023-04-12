import type { Service, Skill, Tag, Project } from '$lib/types'
import type { Writable, Readable } from 'svelte/store'
import { writable, derived, get } from 'svelte/store'

import services from './services'
import skills, { getSkill } from './skills'
import projects from './projects'

//

export const filterParams: Writable<{
  services: number[]
  skills: number[]
  tags: string[]
}> = writable({ services: [], skills: [], tags: [] })

export const filterOptions: Readable<{ services: Service[]; skills: Skill[]; tags: Tag[] }> = derived(
  [filterParams, services, projects],
  ([$filterParams, $services, $projects]) => {
    const services =
      $filterParams.services.length > 0 ? $services.filter((s) => $filterParams.services.includes(s.id)) : $services

    const projects = $projects.filter((p) => services.some((s) => p.relatedServices.includes(s.id)))

    return {
      services: $services, // all the other options are dependent on this. This will always stay the same.
      skills: [
        ...new Set(services.reduce((prev, curr) => [...prev, ...curr.relatedSkills.map((s) => getSkill(s))], [])),
      ].sort((a, b) => a.id - b.id),

      // Get the tags from projects, not from the services. This way, they will be used if they actually exist in a project.
      tags: [...new Set(projects.reduce((prev, curr) => [...prev, ...curr.relatedTags], []))].sort(),
    }
  }
)

export const filteredProjects: Readable<Project[]> = derived([filterParams, projects], ([$filterParams, $projects]) => {
  return $projects
    .filter((p) => {
      if ($filterParams.services.length > 0) {
        if (!$filterParams.services.some((s) => p.relatedServices.includes(s))) return false
      }

      if ($filterParams.skills.length > 0) {
        if (!$filterParams.skills.some((s) => p.relatedSkills.includes(s))) return false
      }

      if ($filterParams.tags.length > 0) {
        if (!$filterParams.tags.some((t) => p.relatedTags.includes(t))) return false
      }

      return true
    })
    .sort((a, b) => (a.order || 9999) - (b.order || 9999))
})

export const resetFilters = () => {
  filterParams.set({ services: [], skills: [], tags: [] })
}
