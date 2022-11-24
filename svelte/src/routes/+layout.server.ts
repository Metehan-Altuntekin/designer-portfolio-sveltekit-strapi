import type { LayoutServerLoad } from './$types'

import { getContent } from '$lib/api'
import { determineLanguage } from '$lib/stores/language'

export const load: LayoutServerLoad = async ({ request }) => {
  // get the language from the request
  const requestedLang = request.headers.get('accept-language')?.split(',')[0].split('-')[0]

  // make sure the language is supported
  const lang = await determineLanguage(requestedLang)

  // get the content for the language
  const content = await getContent({ lang })

  return {
    content,
    lang,
  }
}
