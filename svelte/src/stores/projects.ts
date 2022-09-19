import type { Readable, Writable } from 'svelte/store'
import { readable, writable, derived, get } from 'svelte/store'
import type { Project } from '../types'

import { CONTENT } from '../config'

// All the projects with no order
const projects: Readable<Project[]> = readable(CONTENT.projects)

export default projects

// Separate projects based on related services

type SortedProjects = { [key: number]: Project[] }

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
    tags?: number[]
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
export function toggleFilterParams(serviceId: number, paramType: string, value: number) {
  filterParams.update((services): FilterParams => {
    console.info('toggleFilterParams', services[serviceId])
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
