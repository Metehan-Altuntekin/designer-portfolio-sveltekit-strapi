import type { Readable, Writable } from 'svelte/store'
import { readable, writable } from 'svelte/store'

import type { Content } from '$lib/types'

import contentConfig from '$lib/content'

const content: Writable<Content | undefined> = writable(undefined)

export default content
