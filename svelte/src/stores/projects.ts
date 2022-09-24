import type { Readable, Writable } from 'svelte/store'
import { readable, writable, derived, get } from 'svelte/store'
import type { Project } from '../types'

import { CONTENT } from '../config'

// All the projects with no order
const projects: Readable<Project[]> = readable(CONTENT.projects)

export default projects

// Separate projects based on related services

type SortedProjects = { [key: number]: Project[] }

// TODO find out how this makes keys with numbers and apply to filterParams

export const sortedProjects: Readable<SortedProjects> = derived(projects, ($projects) => {
  return $projects.reduce((prev, curr) => {
    curr.relatedServices.map((sId) => {
      prev = {
        ...prev,
        [sId]: prev[sId] ? [...prev[sId], curr] : [curr],
      }
    })
    return prev
  }, {})
})

// At each service, filter projects related to filterParams

export interface FilterParams {
  [key: string]: {
    skills?: number[]
    tags?: string[]
  }
}
export const filterParams: Writable<FilterParams> = writable(
  Object.keys(get(sortedProjects)).reduce(
    (prev, curr) => ({
      ...prev,
      [`${curr}`]: { skills: [], tags: [] },
    }),
    {}
  )
)
export function toggleFilterParams(serviceId: number, paramType: string, value: number | string) {
  filterParams.update((services): FilterParams => {
    // console.info('toggleFilterParams', services[serviceId])
    return {
      ...services,
      [`${serviceId}`]: {
        ...services[`${serviceId}`],
        [paramType]: services[`${serviceId}`][paramType].includes(value)
          ? services[`${serviceId}`][paramType].filter((param) => param !== value)
          : [...services[`${serviceId}`][paramType], value],
      },
    }
  })
}

// TODO filtered stores for each service

export const filteredProjects: Readable<SortedProjects> = derived(
  [sortedProjects, filterParams],
  ([$sortedProjects, $filterParams]) => {
    return Object.keys($sortedProjects).reduce((prev, key) => {
      return {
        ...prev,
        [key]: applyFilters($sortedProjects[key], $filterParams[`${key}`]),
      }
    }, {})
  }
)

function applyFilters(projects: Project[], params: { skills?: number[]; tags?: string[] }): Project[] {
  if (params.skills.length < 1 && params.tags.length < 1) return projects

  return projects
    .reduce((prev, curr) => {
      const skillScore = curr.relatedServices.reduce((prev, curr) => {
        if (params.skills.includes(curr)) return prev + 1
        return prev
      }, 0)

      const tagScore = curr.relatedTags.reduce((prev, curr) => {
        if (params.tags.includes(curr)) return prev + 1
        return prev
      }, 0)

      const totalScore = skillScore + tagScore

      if (totalScore == 0) return prev

      if (totalScore > 0) return [...prev, { ...curr, filterScore: totalScore }]
    }, [])
    .sort((a, b) => a.filterScore - b.filterScore)
}
