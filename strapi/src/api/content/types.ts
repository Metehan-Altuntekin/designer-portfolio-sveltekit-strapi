// types of the content to be sent to the client

// collections

export interface Service {
  name: string;
  id: number;
  icon: string;
  textPrimary: string;
  textSecondary: string;
  relatedSkills: number[];
  relatedTags: string[];
}

export interface Skill {
  name: string;
  id: number;
  icon: string;
  largeIcon: string;
}

export interface Project {
  name: string;
  id: number;
  relatedSkills: number[];
  relatedTags: string[];
  thumbnail: string;
  images: string[];
  videos: string[];
  description: string;
  relatedServices: number[];
}

export interface Friend {
  name: string;
  image: string;
  link: string;
  roles: string[];
}

export interface SocialMedia {
  name: string;
  link: string;
  icon: string;
}

// single types

export namespace Sections {
  export interface Hero {
    heading: string;
    subheading: string;
  }

  export interface Portfolio {
    subheading: string;
  }

  export interface About {
    heading: string;
    paragraph: string;
    image: string;
  }

  export interface Contact {
    heading: string;
    availability: {
      status: boolean;
    };
    info: {
      location: {
        text: string;
        link: string;
      };
      email: {
        value: string;
      };
      phone: {
        value: string;
      };
      socialMedia: {
        options: {
          name: string;
          link: string;
          icon: string;
        }[];
      };
    };
  }

  export interface Friends {
    heading: string;
    subheading: string;
    friendsList: Friend[];
  }
}

export interface Content {
  services: Service[];
  skills: Skill[];
  projects: Project[];
  sections: {
    hero: Sections.Hero;
    portfolio: Sections.Portfolio;
    about: Sections.About;
    contact: Sections.Contact;
    friends: Sections.Friends;
  };
}
