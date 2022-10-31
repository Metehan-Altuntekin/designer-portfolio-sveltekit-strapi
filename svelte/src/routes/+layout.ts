// To enable prerender for all of the pages
export const prerender = true
export const ssr = false

// initialize the content store before the app starts

import type { PageLoad } from './$types'
import lodash from 'lodash'
import { get as getStore } from 'svelte/store'

import { getContent } from '$lib/api'

import content from '$lib/stores/content'
import { locale } from '$lib/stores/language'

export const load: PageLoad = async () => {
  if (getStore(content)) return // content already loaded

  console.info('load()')

  // initialize content store with content from api
  const data = await getContent()
  content.set(lodash.merge(data, getStore(locale)))

  return
}
