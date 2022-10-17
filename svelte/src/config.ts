import { openPortfolio } from './stores/portfolio'

export const CONTENT = window.content

export const NAV: {
  name: string
  onClick?: () => void // TODO MouseEventHandler<HTMLAnchorElement> error
  src?: string
}[] = [
  {
    name: 'Portfolio',
    onClick: openPortfolio,
    src: '#portfolio',
  },
  {
    name: 'Services',
    onClick: undefined,
    src: '#services',
  },
  {
    name: 'About',
    onClick: undefined,
    src: '#about',
  },
]
