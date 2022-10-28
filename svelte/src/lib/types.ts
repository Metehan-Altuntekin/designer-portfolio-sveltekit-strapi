import * as schemas from '$lib/schemas'

export type Service = schemas.service

export type Skill = schemas.skill

export type Tag = schemas.tag

export type Project = schemas.project

export type Friend = schemas.friend

//

export type Owner = schemas.owner

export namespace Sections {
  export type Header = schemas.sections.header
  export type Hero = schemas.sections.hero
  export type Services = schemas.sections.services
  export type Portfolio = schemas.sections.portfolio
  export type About = schemas.sections.about
  export type Contact = schemas.sections.contact
  export type Friends = schemas.sections.friends
  export type Footer = schemas.sections.footer
}

//

export type Content = schemas.content
