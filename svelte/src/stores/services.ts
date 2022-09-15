import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'
import type { Service } from '../types'

import { CONTENT } from '../config'

const services: Readable<Service[]> = readable(CONTENT.services)

export default services
