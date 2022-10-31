import { staticContent } from '$lib/schemas'
import en from './en'
import tr from './tr'

// validate the locale before exporting so that we can catch errors early
function validate(locale: staticContent) {
  try {
    const schema = staticContent.parse(locale)
    console.info('validated:', schema)
    return schema
  } catch (error) {
    console.error('validation failed:', error, locale)
    throw error
  }
}

const locales = {
  en: validate(en),
  tr: validate(tr),
}

export default locales
