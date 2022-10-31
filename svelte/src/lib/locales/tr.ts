import { staticContent } from '$lib/schemas'

const tr: staticContent = {
  sections: {
    header: {
      nav: {
        home: 'Ana Sayfa',
        portfolio: 'Portfolyo',
        services: 'Hizmetler',
        about: 'Hakkımda',
        contact: 'İletişim',
      },
    },

    hero: {
      actions: {
        services: 'Hizmetler',
        portfolio: 'Portfolyo',
      },
    },

    services: {
      title: 'Hizmetler',
      actions: {
        getAnOffer: 'Teklif al',
        portfolio: 'Portfolyo',
        cleanFilters: 'Sıfırla',
      },
    },

    portfolio: {
      title: 'Portfolyo',
      filters: {
        service: 'Hizmet',
        tags: 'Etiketler',
        skills: 'Yetenekler',
      },
    },

    about: {
      title: 'Hakkımda',
    },

    contact: {
      title: 'İletişim',
      availability: {
        heading: 'Yeni projeler için uygunum.',
      },
      info: {
        location: {
          title: 'Konum',
        },
        email: {
          title: 'E-posta',
        },
        phone: {
          title: 'Telefon',
        },
        socialMedia: {
          title: 'Sosyal medya',
        },
      },
    },

    friends: {
      title: 'Arkadaşlarım',
    },

    footer: {
      copyright: '© 2022 - Cabbar Şibidik',
      disclaimer: 'Hiçbir hakkı saklı değildir.',
      privacyPolicy: 'Giizlilik Politikası',
    },
  },
}

export default tr
