import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'
import type { Project } from '../types'

import { CONTENT } from '../config'

const projects: Readable<Project[]> = readable(CONTENT.projects)

export default projects
