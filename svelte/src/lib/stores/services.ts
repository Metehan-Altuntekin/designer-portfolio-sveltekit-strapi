import type { Readable } from 'svelte/store'
import { readable, get } from 'svelte/store'
import type { Service } from '$lib/types'

import content from './content'

const services: Readable<Service[]> = readable(get(content).services)

export function getService(id: number) {
  return get(services).find((s) => s.id === id)
}

export default services
