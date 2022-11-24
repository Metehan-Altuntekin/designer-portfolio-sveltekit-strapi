export const ssr = true

import type { LayoutLoad } from './$types'

import { initContent } from '$lib/stores/content'
import { initLanguage } from '$lib/stores/language'

export const load: LayoutLoad = async (props) => {
  // initialize the language store with the language from the request
  await initLanguage(props.data.lang)

  // initialize the content store with the content from the server side
  await initContent(props.data.content)

  return
}
