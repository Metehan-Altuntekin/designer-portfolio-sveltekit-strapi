/**
 * content service
 * returns all content in a single object for the given locale
 */

import {
  Project,
  Service,
  Skill,
  Friend,
  SocialMedia,
  Sections,
  Content,
} from "../types";

// collection types

const fetchProjects = async ({ locale }): Promise<Project[]> => {
  try {
    const { results } = (await strapi.service("api::project.project").find({
      locale,
      populate: [
        "thumbnail",
        "images",
        "videos",
        "relatedServices",
        "relatedSkills",
        "relatedTags",
      ],
    })) as {
      results: any[];
    };

    return results.map((project): Project => {
      const {
        id,
        name,
        description,
        thumbnail,
        images,
        videos,
        relatedServices,
        relatedSkills,
        relatedTags,
      } = project;

      return {
        id,
        name,
        description: description,
        thumbnail: process.env.URL + thumbnail.url,
        images: images?.map((image) => process.env.URL + image.url) || [],
        videos: videos?.map((video) => process.env.URL + video.url) || [],
        relatedServices: relatedServices?.map((service) => service.id) || [],
        relatedSkills: relatedSkills?.map((skill) => skill.id) || [],
        relatedTags: relatedTags?.map((tag) => tag.name) || [],
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchServices = async ({ locale }): Promise<Service[]> => {
  try {
    const { results } = (await strapi.service("api::service.service").find({
      locale,
      populate: ["icon", "relatedSkills", "relatedTags"],
    })) as {
      results: any[];
    };

    return results.map((service): Service => {
      const {
        id,
        name,
        icon,
        textPrimary,
        textSecondary,
        relatedSkills,
        relatedTags,
      } = service;

      return {
        id,
        name,
        icon: process.env.URL + icon.url,
        textPrimary,
        textSecondary,
        relatedSkills: relatedSkills?.map((skill) => skill.id) || [],
        relatedTags: relatedTags?.map((tag) => tag.name) || [],
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchSkills = async ({ locale }): Promise<Skill[]> => {
  try {
    const { results } = (await strapi.service("api::skill.skill").find({
      locale,
      populate: ["icon", "largeIcon"],
    })) as {
      results: any[];
    };

    return results.map((skill): Skill => {
      const { id, name, icon, largeIcon } = skill;

      return {
        id,
        name,
        icon: process.env.URL + icon.url,
        largeIcon: process.env.URL + largeIcon.url,
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchFriends = async ({ locale }): Promise<Friend[]> => {
  try {
    const { results } = (await strapi.service("api::friend.friend").find({
      locale,
      populate: ["image"],
    })) as {
      results: any[];
    };

    return results.map((friend): Friend => {
      const { name, image, link, roles } = friend;

      return {
        name,

        image: process.env.URL + image.url,
        link,
        roles,
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchSocialMedia = async (): Promise<SocialMedia[]> => {
  try {
    const { results } = (await strapi
      .service("api::social-media.social-media")
      .find({
        populate: ["icon"],
      })) as {
      results: any[];
    };

    return results.map((socialMedia): SocialMedia => {
      const { name, link, icon } = socialMedia;

      return {
        name,
        link,
        icon: process.env.URL + icon.url,
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

// single types

const fetchHero = async ({ locale }): Promise<Sections.Hero> => {
  try {
    const { heading, subheading } = (await strapi
      .service("api::hero.hero")
      .find({ locale })) as { heading: string; subheading: string };

    return {
      heading,
      subheading,
    };
  } catch (err) {
    console.error(err);
    return {
      heading: "",
      subheading: "",
    };
  }
};

const fetchPortfolio = async ({ locale }): Promise<Sections.Portfolio> => {
  try {
    const { subheading } = (await strapi
      .service("api::portfolio.portfolio")
      .find({ locale })) as { subheading: string };
    return {
      subheading,
    };
  } catch (err) {
    console.error(err);
    return {
      subheading: "",
    };
  }
};

const fetchAbout = async ({ locale }): Promise<Sections.About> => {
  try {
    const { heading, paragraph, image } = (await strapi
      .service("api::about.about")
      .find({ locale, populate: "image" })) as {
      heading: string;
      paragraph: string;
      image: { url: string };
    };
    return {
      heading,
      paragraph,
      image: process.env.URL + image.url,
    };
  } catch (err) {
    console.error(err);
    return {
      heading: "",
      paragraph: "",
      image: "",
    };
  }
};

const fetchAvailabilityStatus = async (): Promise<boolean> => {
  try {
    const { status } = (await strapi
      .service("api::availability.availability")
      .find({})) as { status: boolean };
    return status;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const fetchContact = async ({ locale }): Promise<Sections.Contact> => {
  try {
    const { heading, email, phone, location, maps_link } = (await strapi
      .service("api::contact.contact")
      .find({ locale })) as any;

    return {
      heading,
      availability: {
        status: await fetchAvailabilityStatus(),
      },
      info: {
        location: {
          text: location,
          link: maps_link,
        },
        email: {
          value: email,
        },
        phone: {
          value: phone,
        },
        socialMedia: { options: await fetchSocialMedia() },
      },
    };
  } catch (err) {
    console.error(err);
    return {
      heading: "",
      availability: {
        status: false,
      },
      info: {
        location: {
          text: "",
          link: "",
        },
        email: {
          value: "",
        },
        phone: {
          value: "",
        },
        socialMedia: { options: [] },
      },
    };
  }
};

export default () => ({
  exampleAction: async (ctx) => {
    try {
      ctx.body = "peepee";
    } catch (err) {
      ctx.body = err;
    }
  },

  fetchAllContent: async ({
    locale,
  }: {
    locale: string;
  }): Promise<Content | any> => {
    try {
      return {
        skills: await fetchSkills({ locale }),
        projects: await fetchProjects({ locale }),
        services: await fetchServices({ locale }),

        sections: {
          hero: await fetchHero({ locale }),
          portfolio: await fetchPortfolio({ locale }),
          about: await fetchAbout({ locale }),
          contact: await fetchContact({ locale }),
        },
      };
    } catch (err) {
      return err;
    }
  },
});
