import { staticContent } from '$lib/schemas'

const en: staticContent = {
  sections: {
    header: {
      nav: {
        home: 'Home',
        portfolio: 'Portfolio',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
      },
    },

    hero: {
      actions: {
        services: 'Services',
        portfolio: 'Portfolio',
      },
    },

    services: {
      title: 'Services',
      actions: {
        getAnOffer: 'Get an offer',
        portfolio: 'Portfolio',
        cleanFilters: 'Clean filters',
      },
    },

    portfolio: {
      title: 'Portfolio',
      filters: {
        service: 'Service',
        tags: 'Tags',
        skills: 'Skills',
      },
    },

    about: {
      title: 'About',
    },

    contact: {
      title: 'Contact',
      availability: {
        heading: 'I am available for new projects.',
      },
      info: {
        location: {
          title: 'Location',
        },
        email: {
          title: 'Email',
        },
        phone: {
          title: 'Phone',
        },
        socialMedia: {
          title: 'Social media',
        },
      },
    },

    friends: {
      title: 'Friends',
    },

    footer: {
      copyright: '© 2022 - Cabbar Şibidik',
      disclaimer: 'None rights reserved',
      privacyPolicy: 'Privacy policy',
    },
  },
}

export default en
