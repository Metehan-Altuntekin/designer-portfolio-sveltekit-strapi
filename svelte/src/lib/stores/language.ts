// Multi language support system
// We are using a simple system to support multiple languages
// All the data is stored in a single object
// The object is divided into sections
// The content is being accessed by using this single object

import { type Readable, writable, derived, get } from 'svelte/store'

import { GB, TR } from 'country-flag-icons/string/3x2'

import locales from '$lib/locales'
import { staticContent } from '$lib/schemas'

// * Constants

export const DEFAULT_LANGUAGE = 'tr'

export const LANGUAGES = {
  en: {
    key: 'en',
    name: 'English',
    flag: GB,
  },
  tr: {
    key: 'tr',
    name: 'Türkçe',
    flag: TR,
  },
}

type language = keyof typeof LANGUAGES

// ------------------------------

// * Stores

export const language = writable<language>(DEFAULT_LANGUAGE)

export const locale: Readable<staticContent> = derived(language, ($language) => {
  // constantly update the locale
  return locales[$language] ?? locales[DEFAULT_LANGUAGE]
})

// ------------------------------

// * Functions

export const setHtmlLang = (lang: language) => document.documentElement.setAttribute('lang', lang)

// change the html lang attribute to match the language
language.subscribe((lang) => {
  try {
    setHtmlLang(lang)
  } catch (e) {
    console.error('Error setting language', e)
  }
})

export function setLanguage(lang: language) {
  if (LANGUAGES[lang]) {
    language.set(lang)
    setHtmlLang(lang)
  } else {
    console.error('Language not found:', lang)
    language.set(DEFAULT_LANGUAGE)
    setHtmlLang(DEFAULT_LANGUAGE)
  }
}

export function initLanguage() {
  const browserLang = navigator.language.split('-')[0]

  // if the language of the browser is not supported, use the default language
  const lang: language = Object.keys(LANGUAGES).includes(browserLang) ? (browserLang as language) : DEFAULT_LANGUAGE

  setLanguage(lang)
}
