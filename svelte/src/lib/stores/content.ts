import { derived, type Readable, writable, get } from 'svelte/store'
import lodash from 'lodash'

import type { Content, DynamicContent } from '$lib/types'
import { language, locale } from '$lib/stores/language'
import { getContent } from '$lib/api'

export const dynamicContent = writable<DynamicContent | null>(null)

export const content: Readable<Content> = derived([dynamicContent, locale], ([$dynamicContent, $locale]) => {
  return lodash.merge($dynamicContent, $locale)
})

// ! This function has to be run before the app renders
export async function initContent(content?: DynamicContent) {
  if (typeof content !== 'undefined' && get(dynamicContent) === content) return // already initialized with the same content
  if (typeof content === 'undefined' && get(dynamicContent) !== null) return // already initialized with a content

  dynamicContent.set(content || (await getContent({ lang: get(language) })))
}

export default content
