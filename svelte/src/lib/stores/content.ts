import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'

import type { Content } from '$lib/types'

import contentConfig from '$lib/content'

const content: Readable<Content> = readable(contentConfig || {})

export default content
