import type { Readable } from 'svelte/store'
import { readable, derived, get } from 'svelte/store'
import type { Service } from '$lib/types'

import content from './content'

const services: Readable<Service[]> = derived(content, ($content) => {
  return $content?.services || []
})

export function getService(id: number) {
  return get(services).find((s) => s.id === id)
}

export default services
