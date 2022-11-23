// This is the schema of data required for front-end to display.
// key: [min,max] is used to define a string with min and max lengths
// keys that start with a dollar sign won't be editable on admin dashboard
// but everything will be dependent on language preferences

export const dataSchema = {
  owner: {
    $name: [2, 30],
    $surname: [2, 30],
    $logo: URL,
  },

  skills: [
    {
      $id: Number,
      name: [2, 20],
      icon: URL,
      largeIcon: URL,
    },
  ],

  services: [
    {
      $id: Number || '',
      name: [4, 20],
      icon: URL,

      textPrimary: [100, 200],
      textSecondary: [200, 400],

      relatedSkills: [Number], // an array of skill ids
      relatedTags: [[2, 20]],
    },
  ],

  projects: [
    // portfolio projects
    {
      $id: Number,
      name: [4, 20],
      thumbnail: URL,
      images: [URL],
      videos: [URL],
      description: [150, 300],

      relatedServices: [Number], // an array of service ids
      relatedSkills: [Number], // an array of skill ids
      relatedTags: [[2, 20]],
    },
  ],

  sections: {
    header: {
      $nav: {
        $home: [2, 16],
        $portfolio: [2, 16],
        $services: [2, 16],
        $about: [2, 16],
        $contact: [2, 16],
      },
    },

    hero: {
      heading: [35, 60],
      subheading: [100, 160],
      $actions: {
        $services: [2, 16],
        $portfolio: [2, 16],
      },
    },

    services: {
      $title: [4, 16], // Services
      $actions: {
        $getAnOffer: [4, 16],
        $portfolio: [4, 16],
        $cleanFilters: [4, 10],
      },
    },

    portfolio: {
      $title: [2, 16], // Portfolio
      subheading: [10, 50],
      $filters: {
        $service: [2, 12],
        $tags: [2, 12],
        $skills: [2, 12],
      },
    },

    about: {
      $title: [4, 16], // About
      heading: [32, 50],
      paragraph: [500, 700],
      image: URL,
    },

    contact: {
      $title: [2, 16], // Contact
      heading: [20, 40],
      availability: {
        $heading: [20, 40],
        status: Boolean,
      },
      info: {
        location: {
          $title: [4, 12],
          text: [6, 20],
          link: URL,
        },
        email: {
          $title: [4, 12],
          value: [4, 40],
        },
        phone: {
          $title: [4, 12],
          value: [6, 20],
        },
        socialMedia: {
          $title: [4, 12],
          options: [
            {
              name: [2, 20],
              link: URL,
              icon: URL,
            },
          ],
        },
      },
    },

    friends: {
      $title: [4, 16],
      heading: [8, 20],
      subheading: [15, 40],
      friendsList: [
        {
          name: [6, 20],
          image: URL,
          roles: [6, 40],
          link: URL,
        },
      ],
    },

    footer: {
      $copyright: [10, 30],
      $disclaimer: [10, 30],
      $privacyPolicy: [6, 30],
    },
  },
}
