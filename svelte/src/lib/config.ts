import content from '$lib/content'

export const CONTENT = content

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
  onClick?: () => void // TODO MouseEventHandler<HTMLAnchorElement> error
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
