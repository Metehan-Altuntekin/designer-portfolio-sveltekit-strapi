import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'
import contentConfig from '$lib/content'

const content: Readable<any> = readable(contentConfig || {})

export default content
