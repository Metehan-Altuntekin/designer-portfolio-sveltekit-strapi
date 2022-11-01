import { derived, type Readable, writable, get } from 'svelte/store'
import lodash from 'lodash'

import type { Content, DynamicContent } from '$lib/types'
import { locale } from '$lib/stores/language'
import { getContent } from '$lib/api'

export const dynamicContent = writable<DynamicContent | null>(null)

export const content: Readable<Content> = derived([dynamicContent, locale], ([$dynamicContent, $locale]) => {
  return lodash.merge($dynamicContent, $locale)
})

// ! This function has to be run before the app renders
export async function initContent() {
  if (get(dynamicContent) !== null) return // content already loaded

  const data = await getContent()
  dynamicContent.set(data)
}

export default content
