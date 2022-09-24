import type { Readable } from 'svelte/store'
import { readable, get } from 'svelte/store'
import type { Skill } from '../types'

import { CONTENT } from '../config'

const skills: Readable<Skill[]> = readable(CONTENT.skills)

export function getSkill(id: number): Skill {
  return get(skills).find((s) => s.id === id)
}

export default skills
