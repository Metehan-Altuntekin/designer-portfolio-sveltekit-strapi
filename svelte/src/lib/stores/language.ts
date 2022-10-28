// Multi language support system

import { type Writable, writable, get } from 'svelte/store'

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

export const language: Writable<keyof typeof LANGUAGES> = writable('en')

export function setLanguage(lang: keyof typeof LANGUAGES) {
  if (LANGUAGES[lang]) {
    language.set(lang)
  }
}

export function getLanguage() {
  return get(language)
}
