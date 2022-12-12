// import content from '$lib/stores/content'
import type { Owner } from '$lib/types'

export const API_MAIN_URL = 'http://localhost:1327/api'
export const API_ROUTES = {
  content: `${API_MAIN_URL}/content`,
  visitorMessage: `${API_MAIN_URL}/visitor-messages`,
}

export const MAIN_URL = '/'

const completeUrl = (url: string) => (url.startsWith('http') ? url : `${MAIN_URL}${url}`)

export const ROUTES = {
  HOME: MAIN_URL,
  PORTFOLIO: completeUrl('portfolio'),
  SERVICES: completeUrl('#services'),
  ABOUT: completeUrl('#about'),
  CONTACT: completeUrl('#contact'),
  PRIVACY_POLICY: completeUrl('privacy-policy'),
}

export const NAV: {
  name: string
  onClick?: svelte.JSX.MouseEventHandler<HTMLAnchorElement>
  src?: string
}[] = [
  {
    name: 'Portfolio',
    onClick: undefined,
    src: ROUTES.PORTFOLIO,
  },
  {
    name: 'Services',
    onClick: undefined,
    src: ROUTES.SERVICES,
  },
  {
    name: 'About',
    onClick: undefined,
    src: ROUTES.ABOUT,
  },
]

export const OWNER: Owner = {
  name: 'Rambocan',
  surname: 'Ramboğlu',
  logo: './assets/logo.png',
}
