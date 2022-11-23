import * as zod from 'zod'

export const owner = zod.object({
  name: zod.string().min(2).max(30),
  surname: zod.string().min(2).max(30),
  logo: zod.string().url(),
})

export type owner = zod.infer<typeof owner>

//

export const tag = zod.string().min(2).max(20)

export type tag = zod.infer<typeof tag>

//

export const skill = zod.object({
  id: zod.number(),
  name: zod.string().min(2).max(20),
  icon: zod.string().url(),
  largeIcon: zod.string().url(),
})

export type skill = zod.infer<typeof skill>

//

export const service = zod.object({
  id: zod.number(),
  name: zod.string().min(4).max(20),
  icon: zod.string().url(),

  textPrimary: zod.string().min(100).max(200),
  textSecondary: zod.string().min(200).max(400),

  relatedSkills: zod.array(zod.number()),
  relatedTags: zod.array(tag),
})

export type service = zod.infer<typeof service>

//

export const project = zod.object({
  id: zod.number(),
  name: zod.string().min(4).max(20),
  thumbnail: zod.string().url(),
  images: zod.array(zod.string().url()),
  videos: zod.array(zod.string().url()),
  description: zod.string().min(150).max(300),

  relatedServices: zod.array(zod.number()),
  relatedSkills: zod.array(zod.number()),
  relatedTags: zod.array(tag),
})

export type project = zod.infer<typeof project>

//

export const friend = zod.object({
  name: zod.string().min(6).max(20),
  image: zod.string().url(),
  roles: zod.string().min(6).max(40),
  link: zod.string().url(),
})

export type friend = zod.infer<typeof friend>

//  ---------------------------------------------------------------------------

// * Section schemas

// compare this to data-schema.ts
export namespace sections {
  export const header = zod.object({
    nav: zod.object({
      home: zod.string().min(2).max(16),
      portfolio: zod.string().min(2).max(16),
      services: zod.string().min(2).max(16),
      about: zod.string().min(2).max(16),
      contact: zod.string().min(2).max(16),
    }),
  })

  export type header = zod.infer<typeof header>

  export const hero = zod.object({
    heading: zod.string().min(35).max(60),
    subheading: zod.string().min(100).max(160),
    actions: zod.object({
      services: zod.string().min(2).max(16),
      portfolio: zod.string().min(2).max(16),
    }),
  })

  export type hero = zod.infer<typeof hero>

  export const services = zod.object({
    title: zod.string().min(4).max(16),
    actions: zod.object({
      getAnOffer: zod.string().min(4).max(16),
      portfolio: zod.string().min(4).max(16),
      cleanFilters: zod.string().min(4).max(16),
    }),
  })

  export type services = zod.infer<typeof services>

  export const portfolio = zod.object({
    title: zod.string().min(2).max(16),
    subheading: zod.string().min(10).max(50),
    filters: zod.object({
      service: zod.string().min(2).max(12),
      tags: zod.string().min(2).max(12),
      skills: zod.string().min(2).max(12),
    }),
  })

  export type portfolio = zod.infer<typeof portfolio>

  export const about = zod.object({
    title: zod.string().min(2).max(16),
    heading: zod.string().min(32).max(50),
    paragraph: zod.string().min(500).max(700),
    image: zod.string().url(),
  })

  export type about = zod.infer<typeof about>

  // compare this to data-schema.ts > data.sections.contact
  export const contact = zod.object({
    title: zod.string().min(2).max(16),
    heading: zod.string().min(20).max(40),
    availability: zod.object({
      heading: zod.string().min(20).max(40),
      status: zod.boolean(),
    }),

    info: zod.object({
      location: zod.object({
        title: zod.string().min(4).max(12),
        text: zod.string().min(6).max(20),
        link: zod.string().url(),
      }),
      email: zod.object({
        title: zod.string().min(4).max(12),
        value: zod.string().min(4).max(40).email(),
      }),
      phone: zod.object({
        title: zod.string().min(4).max(12),
        value: zod.string().min(6).max(20), // TODO test this with regex
      }),
      socialMedia: zod.object({
        title: zod.string().min(4).max(12),
        options: zod.array(
          zod.object({
            name: zod.string().min(2).max(20),
            link: zod.string().url(),
            icon: zod.string().url(),
          })
        ),
      }),
    }),
  })

  export type contact = zod.infer<typeof contact>

  export const friends = zod.object({
    title: zod.string().min(4).max(16),
    heading: zod.string().min(8).max(20),
    subheading: zod.string().min(15).max(40),
    friendsList: zod.array(friend),
  })

  export type friends = zod.infer<typeof friends>

  export const footer = zod.object({
    copyright: zod.string().min(10).max(30),
    disclaimer: zod.string().min(10).max(30),
    privacyPolicy: zod.string().min(6).max(30),
  })

  export type footer = zod.infer<typeof footer>
}

//  ---------------------------------------------------------------------------

// * Content schema

export const content = zod.object({
  services: zod.array(service),
  skills: zod.array(skill),
  projects: zod.array(project),

  sections: zod.object({
    header: sections.header,
    hero: sections.hero,
    services: sections.services,
    portfolio: sections.portfolio,
    about: sections.about,
    contact: sections.contact,
    friends: sections.friends,
    footer: sections.footer,
  }),
})

export type content = zod.infer<typeof content>

// ---------------------------------------------------------------------------

// * Schemas for static content
// The content that stored in locales
export const staticContent = zod.object({
  sections: zod.object({
    header: sections.header,
    hero: zod.object({
      actions: zod.object({
        services: sections.hero.shape.actions.shape.services,
        portfolio: sections.hero.shape.actions.shape.portfolio,
      }),
    }),
    services: sections.services,
    portfolio: sections.portfolio.omit({ subheading: true }),
    about: sections.about.pick({ title: true }),
    contact: zod.object({
      title: sections.contact.shape.title,
      availability: sections.contact.shape.availability.pick({ heading: true }),
      info: zod.object({
        location: sections.contact.shape.info.shape.location.pick({
          title: true,
        }),
        email: sections.contact.shape.info.shape.email.pick({ title: true }),
        phone: sections.contact.shape.info.shape.phone.pick({ title: true }),
        socialMedia: sections.contact.shape.info.shape.socialMedia.pick({
          title: true,
        }),
      }),
    }),
    friends: sections.friends.pick({ title: true }),
    footer: sections.footer,
  }),
})

export type staticContent = zod.infer<typeof staticContent>

//

// * Schemas for dynamic content
// The content that stored in database and edited by the user, fetched from the API
export const dynamicContent = zod.object({
  skills: zod.array(skill),
  services: zod.array(service),
  projects: zod.array(project),

  sections: zod.object({
    hero: sections.hero.pick({ heading: true, subheading: true }),
    portfolio: sections.portfolio.pick({ subheading: true }),
    about: sections.about.pick({ heading: true, paragraph: true, image: true }),
    contact: zod.object({
      heading: sections.contact.shape.heading,
      availability: sections.contact.shape.availability.pick({ status: true }),
      info: zod.object({
        location: sections.contact.shape.info.shape.location.pick({
          text: true,
          link: true,
        }),
        email: sections.contact.shape.info.shape.email.pick({ value: true }),
        phone: sections.contact.shape.info.shape.phone.pick({ value: true }),
        socialMedia: sections.contact.shape.info.shape.socialMedia.pick({
          options: true,
        }),
      }),
    }),
    friends: sections.friends.pick({
      heading: true,
      subheading: true,
      friendsList: true,
    }),
  }),
})

export type dynamicContent = zod.infer<typeof dynamicContent>
