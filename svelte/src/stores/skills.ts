import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'
import type { Skill } from '../types'

import { CONTENT } from '../config'

const skills: Readable<Skill[]> = readable(CONTENT.skills)

export default skills
