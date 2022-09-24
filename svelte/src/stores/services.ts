import type { Readable } from 'svelte/store'
import { readable, get } from 'svelte/store'
import type { Service } from '../types'

import { CONTENT } from '../config'

const services: Readable<Service[]> = readable(CONTENT.services)

export function getService(id: number): Service {
  return get(services).find((s) => s.id === id)
}

export default services
