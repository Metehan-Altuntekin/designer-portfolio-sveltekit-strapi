import type { Readable } from 'svelte/store'
import { readable, get } from 'svelte/store'
import type { Skill } from '$lib/types'

import content from './content'

const skills: Readable<Skill[]> = readable(get(content).skills)

export function getSkill(id: number): Skill {
  return get(skills).find((s) => s.id === id)
}

export default skills
