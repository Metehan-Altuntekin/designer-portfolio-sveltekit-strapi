const content = {
  owner: {
    name: 'Hüsnüye',
    surname: 'Hüsnoğlu',
    logo: './assets/logo.png',
  },

  skills: [
    {
      id: 1,
      name: 'Blender',
      icon: './assets/skills/1.png',
      largeIcon: './assets/skills/1Large.png',
    },
    {
      id: 2,
      name: 'ICLone',
      icon: './assets/skills/2.png',
      largeIcon: './assets/skills/2Large.png',
    },
  ],

  services: [
    {
      id: 1,
      name: '3D Modeling',
      icon: './assets/3d-modeling.svg',

      textPrimary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto ut dignissimos sunt, ipsa provident ipsum.',
      textSecondary:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum veniam sequi nemo labore, repellat natus recusandae accusantium saepe eos maiores tenetur nihil nisi. Blanditiis odit beatae distinctio vero? Suscipit ratione sunt doloribus odio illo expedita, vel ipsa iste quas fugiat dicta id quam? Quo suscipit itaque nulla! Porro, corporis?',

      relatedSkills: [1, 2],
      relatedTags: ['Realism', 'Low Poly', '3D', 'Cartoon', 'High Poly'],
    },
    {
      id: 2,
      name: '3D Animation',
      icon: './assets/3d-modeling.svg',

      textPrimary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto ut dignissimos sunt, ipsa provident ipsum.',
      textSecondary:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum veniam sequi nemo labore, repellat natus recusandae accusantium saepe eos maiores tenetur nihil nisi. Blanditiis odit beatae distinctio vero? Suscipit ratione sunt doloribus odio illo expedita, vel ipsa iste quas fugiat dicta id quam? Quo suscipit itaque nulla! Porro, corporis?',

      relatedSkills: [2, 1],
      relatedTags: ['Cartoon', 'Looney Tunes', 'Animation', 'Figures'],
    },
  ],

  projects: [
    {
      id: 1,
      name: 'Blue Haired Chick',
      thumbnail: './assets/projects/1.jpg',
      images: [
        './assets/projects/1.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism', 'Low Poly', '3D', 'Cartoon'],
    },
    {
      id: 2,
      name: 'Motorbike I Guess',
      thumbnail: './assets/projects/2.jpg',
      images: [
        './assets/projects/2.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum! veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Cartoon', 'Looney Tunes', 'Animation', 'Figures'],
    },
    {
      id: 3,
      name: 'Minions',
      thumbnail: './assets/projects/3.jpg',
      images: [
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
        './assets/projects/5.jpg',
        './assets/projects/9.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod possimus!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly'],
    },
    {
      id: 4,
      name: 'I Dunno',
      thumbnail: './assets/projects/4.jpg',
      images: [
        './assets/projects/4.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 5,
      name: 'I Gues Greenie',
      thumbnail: './assets/projects/5.jpg',
      images: [
        './assets/projects/5.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 6,
      name: 'Hello There',
      thumbnail: './assets/projects/6.jpg',
      images: [
        './assets/projects/6.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 7,
      name: 'Boom Witch Get Off',
      thumbnail: './assets/projects/7.jpg',
      images: [
        './assets/projects/7.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 8,
      name: 'Exactly 20 Character',
      thumbnail: './assets/projects/8.jpg',
      images: [
        './assets/projects/8.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 9,
      name: 'Gotta Be Palm Tree',
      thumbnail: './assets/projects/9.jpg',
      images: [
        './assets/projects/9.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 10,
      name: 'Blue Haired Chick',
      thumbnail: './assets/projects/1.jpg',
      images: [
        './assets/projects/1.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism', 'Low Poly', '3D', 'Cartoon'],
    },
    {
      id: 20,
      name: 'Motorbike I Guess',
      thumbnail: './assets/projects/2.jpg',
      images: [
        './assets/projects/2.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum! veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Cartoon', 'Looney Tunes', 'Animation', 'Figures'],
    },
    {
      id: 30,
      name: 'Minions',
      thumbnail: './assets/projects/3.jpg',
      images: [
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
        './assets/projects/5.jpg',
        './assets/projects/9.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod possimus!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly'],
    },
    {
      id: 40,
      name: 'I Dunno',
      thumbnail: './assets/projects/4.jpg',
      images: [
        './assets/projects/4.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 50,
      name: 'I Gues Greenie',
      thumbnail: './assets/projects/5.jpg',
      images: [
        './assets/projects/5.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 60,
      name: 'Hello There',
      thumbnail: './assets/projects/6.jpg',
      images: [
        './assets/projects/6.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 70,
      name: 'Boom Witch Get Off',
      thumbnail: './assets/projects/7.jpg',
      images: [
        './assets/projects/7.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 80,
      name: 'Exactly 20 Character',
      thumbnail: './assets/projects/8.jpg',
      images: [
        './assets/projects/8.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 90,
      name: 'Gotta Be Palm Tree',
      thumbnail: './assets/projects/9.jpg',
      images: [
        './assets/projects/9.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 100,
      name: 'Blue Haired Chick',
      thumbnail: './assets/projects/1.jpg',
      images: [
        './assets/projects/1.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism', 'Low Poly', '3D', 'Cartoon'],
    },
    {
      id: 200,
      name: 'Motorbike I Guess',
      thumbnail: './assets/projects/2.jpg',
      images: [
        './assets/projects/2.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum! veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Cartoon', 'Looney Tunes', 'Animation', 'Figures'],
    },
    {
      id: 300,
      name: 'Minions',
      thumbnail: './assets/projects/3.jpg',
      images: [
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
        './assets/projects/5.jpg',
        './assets/projects/9.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod possimus!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly'],
    },
    {
      id: 400,
      name: 'I Dunno',
      thumbnail: './assets/projects/4.jpg',
      images: [
        './assets/projects/4.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 500,
      name: 'I Gues Greenie',
      thumbnail: './assets/projects/5.jpg',
      images: [
        './assets/projects/5.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 600,
      name: 'Hello There',
      thumbnail: './assets/projects/6.jpg',
      images: [
        './assets/projects/6.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 700,
      name: 'Boom Witch Get Off',
      thumbnail: './assets/projects/7.jpg',
      images: [
        './assets/projects/7.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 800,
      name: 'Exactly 20 Character',
      thumbnail: './assets/projects/8.jpg',
      images: [
        './assets/projects/8.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 900,
      name: 'Gotta Be Palm Tree',
      thumbnail: './assets/projects/9.jpg',
      images: [
        './assets/projects/9.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 1000,
      name: 'Blue Haired Chick',
      thumbnail: './assets/projects/1.jpg',
      images: [
        './assets/projects/1.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism', 'Low Poly', '3D', 'Cartoon'],
    },
    {
      id: 2000,
      name: 'Motorbike I Guess',
      thumbnail: './assets/projects/2.jpg',
      images: [
        './assets/projects/2.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum! veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Cartoon', 'Looney Tunes', 'Animation', 'Figures'],
    },
    {
      id: 3000,
      name: 'Minions',
      thumbnail: './assets/projects/3.jpg',
      images: [
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
        './assets/projects/5.jpg',
        './assets/projects/9.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod possimus!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly'],
    },
    {
      id: 4000,
      name: 'I Dunno',
      thumbnail: './assets/projects/4.jpg',
      images: [
        './assets/projects/4.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 5000,
      name: 'I Gues Greenie',
      thumbnail: './assets/projects/5.jpg',
      images: [
        './assets/projects/5.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [2],
      relatedSkills: [2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 6000,
      name: 'Hello There',
      thumbnail: './assets/projects/6.jpg',
      images: [
        './assets/projects/6.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 7000,
      name: 'Boom Witch Get Off',
      thumbnail: './assets/projects/7.jpg',
      images: [
        './assets/projects/7.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos officiis soluta quae reprehenderit esse qui architecto voluptate. Quibusdam numquam quasi magni, quos quod ipsum placeat exercitationem sunt, autem commodi ducimus a impedit unde provident, eos aut blanditiis totam dolorum!',

      relatedServices: [1, 2],
      relatedSkills: [1, 2],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 8000,
      name: 'Exactly 20 Character',
      thumbnail: './assets/projects/8.jpg',
      images: [
        './assets/projects/8.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
    {
      id: 9000,
      name: 'Gotta Be Palm Tree',
      thumbnail: './assets/projects/9.jpg',
      images: [
        './assets/projects/9.jpg',
        './assets/projects/2.jpg',
        './assets/projects/3.jpg',
        './assets/projects/4.jpg',
      ],
      videos: [],
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nam nesciunt adipisci laudantium et cum unde ab qui incidunt eius at quod magni harum possimus! Quod distinctio repellendus nisi veritatis!',

      relatedServices: [1],
      relatedSkills: [1],
      relatedTags: ['High Poly', 'Realism'],
    },
  ],

  sections: {
    about: {
      title: 'About Me',
      heading: '3D Modeling Has Never Been So Good',
      text: 'Lörem ipsum bröllopsklänning böpisade Sten Carlsson ofått. Kurt Bergström unavyn i sod beska ponade trigoliga dens tåsam. Modara fonade, pren ryde Amanda Holm Anton Nordström om än milar medan smartboard. Lase ladagångar. Bisade spesam, att lykynar Ove Lundberg, antina euromor Hans Hellström. Stereokemi stenode epitet innan Viola Nyberg. Åke Henriksson Oskar Dahl. Mivyling Malin Henriksson telenånade perfiering skogsbad autonade i teletåna mivik. Fer hästlasagne. Sesona vijyv. Behet fatal Kenneth Bergström mivyda. Thomas Jonasson teletassa och nilingar och pora emedan hänt afodade, hyperfaktisk: rygofårad. ',
      image: './assets/about-img.png',
    },

    contact: {
      title: 'Contact Me', // Contact
      heading: 'Do you need to hire a professional?',
      availability: {
        heading: 'I am available for new projects.',
        status: true,
      },
      info: {
        location: {
          title: 'Location',
          text: 'Bawitdaba, Kid Rock',
          link: 'https://maps.google.com',
        },
        email: {
          title: 'Email',
          value: 'webdesign.metehan@gmail.com',
        },
        phone: {
          title: 'Phone',
          value: '+90 555 444 33 22',
        },
        socialMedia: {
          title: 'Social Media',
          options: [
            {
              name: 'Artstation',
              link: 'https://www.artstation.com/ramazan_k',
              icon: './assets/social-media/artstation.svg',
            },
            {
              name: 'Dribbble',
              link: 'https://www.dribbble.com/',
              icon: './assets/social-media/dribbble.svg',
            },
            {
              name: 'YouTube',
              link: 'https://www.youtube.com/c/Donan%C4%B1mc%C4%B1Baba',
              icon: './assets/social-media/youtube.svg',
            },
            {
              name: 'Upwork',
              link: 'https://www.upwork.com/freelancers/~017cb47fa1c7895f19',
              icon: './assets/social-media/upwork.svg',
            },
            {
              name: 'Instagram',
              link: 'https://www.instagram.com',
              icon: './assets/social-media/instagram.svg',
            },
          ],
        },
      },
    },

    friends: {
      heading: 'My Friends',
      subheading: 'Developers & designers you can discover',
      friendsList: [
        {
          name: 'Metehan Altuntekin',
          image: 'https://github.com/Metehan-Altuntekin.png',
          roles: ['Frontend Developer', 'Svelte TS'],
          link: 'https://github.com/Metehan-Altuntekin',
        },
        {
          name: 'Ümit Ulusoy',
          image: 'https://github.com/Umit-Ulusoy.png',
          roles: ['Backend Developer', 'PHP Laravel'],
          link: 'https://github.com/Umit-Ulusoy',
        },
        {
          name: 'Burak Demir',
          image: 'https://github.com/burakndmr.png',
          roles: ['Frontend Developer', 'React.js'],
          link: 'https://github.com/burakndmr',
        },
        {
          name: 'Hüsnü Mahmudizer',
          image: './assets/friends/husnu.jpg',
          roles: ['3D Designer', '3D Animator'],
          link: 'https://youtube.com',
        },
      ],
    },

    portfolio: {
      title: 'Portfolio', // Portfolio
      subheading: 'My latest works and projects',
      filters: {
        $service: 'Service',
        $tags: 'Tags',
        $skills: 'Skills',
      },
    },

    footer: {
      copyright: '2022 Kocaman Razabıyık',
      disclaimer: 'None rights reserved.',
      privacyPolicy: 'Piracy Policy',
    },
  },
}

export default content
