export const NAV: {
  name: string
  onClick?: any  // TODO MouseEventHandler<HTMLAnchorElement> error
  src?: string
}[] = [
  {
    name: 'Portfolio',
    onClick: undefined,
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

export const CONTENT = window.content
