// To enable prerender for all of the pages
export const prerender = true
export const ssr = false

// initialize the content store before the app starts

import type { PageLoad } from './$types'

import { initContent } from '$lib/stores/content'
import { initLanguage } from '$lib/stores/language'

export const load: PageLoad = async () => {
  // initialize the language store
  initLanguage()
  // initialize the content store
  await initContent()

  return
}
