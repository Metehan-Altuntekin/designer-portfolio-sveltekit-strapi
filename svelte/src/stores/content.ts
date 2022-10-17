import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'

const content: Readable<any> = readable(window.content || {})

export default content
