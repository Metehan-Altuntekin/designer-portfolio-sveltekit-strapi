// Multi language support system
// We are using a simple system to support multiple languages
// All the data is stored in a single object
// The object is divided into sections
// The content is being accessed by using this single object

import { type Writable, type Readable, writable, derived, get } from 'svelte/store'

import locales from '$lib/locales'
import { staticContent } from '$lib/schemas'

export const LANGUAGES = {
  en: {
    key: 'en',
    name: 'English',
    flag: '🇬🇧',
  },
  tr: {
    key: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷',
  },
}

export const DEFAULT_LANGUAGE = 'en'

//

export const language: Writable<keyof typeof LANGUAGES> = writable('en')

export function setLanguage(lang: keyof typeof LANGUAGES) {
  if (LANGUAGES[lang]) {
    language.set(lang)
  } else {
    console.error('Language not found:', lang)
    language.set(DEFAULT_LANGUAGE)
  }
}

//

// constantly update the locale
export const locale: Readable<staticContent> = derived(language, ($language) => {
  return locales[$language]
})
