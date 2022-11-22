/**
 * content service
 */

import { Project, Service, Skill, Friend, Sections, Content } from "../types";

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
        projects: await fetchProjects({ locale }),
        sections: {
          hero: await fetchHero({ locale }),
          portfolio: await fetchPortfolio({ locale }),
          about: await fetchAbout({ locale }),
        },
      };
    } catch (err) {
      return err;
    }
  },
});
