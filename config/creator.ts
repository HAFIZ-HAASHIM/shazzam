export interface ChannelInfo {
  name: string;
  handle: string;
  tagline: string;
  description: string;
  url: string;
  avatar: string;
  badge: string;
  subscribers: string;
  focus: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
  channel: string;
}

export const CREATOR_CONFIG = {
  name: "Shaz Mohamed",
  alias: "SHAZZAM",
  handle: "@callmeshazzam",
  descriptor: "Tech commentator, director, and digital creator based in Kochi & UAE.",
  tagline: "Chai, Tech and Pucham",
  
  // Spline 3D Scene (Transparent local bridge + remote CDN URL)
  spline: {
    publishedUrl: "/spline/index.html",
    remoteUrl: "https://my.spline.design/robotfollowcursorforlandingpage-eQcacMihW6UYWJNGZeGKPgkV/",
    posterImage: "/spline-preview.jpg",
  },

  socials: {
    instagram: "https://www.instagram.com/callmeshazzam/",
    youtubeTech: "https://www.youtube.com/@CallMeShazzamTECH",
    youtubeLife: "https://www.youtube.com/@Lifeof_Shazzam",
    twitter: "https://twitter.com/callmeshazzam",
    tedx: "https://www.youtube.com/results?search_query=Yes%2C+I+Make+Content+Online+For+a+Living+Shaz+Mohammed+TEDx",
  },

  channels: {
    tech: {
      name: "CallMeShazzam TECH",
      handle: "@CallMeShazzamTECH",
      badge: "Tech Audits",
      subscribers: "1M+ Subscribers",
      tagline: "Chai, Tech and Pucham",
      description: "Unfiltered hardware audits, consumer device critiques, and tech news in Malayalam.",
      url: "https://www.youtube.com/@CallMeShazzamTECH",
      avatar: "/images/shazaam-tech-avatar.jpg",
      focus: ["Flagships", "Consumer Rights", "Apple & Android", "Hardware Realities"],
    } as ChannelInfo,
    life: {
      name: "LifeofShazzam",
      handle: "@Lifeof_Shazzam",
      badge: "Cinema & Logs",
      subscribers: "100K+ Subscribers",
      tagline: "Cinema & Personal Perspective",
      description: "Candid film critiques, travel logs, and conversational vlogs from a director's viewpoint.",
      url: "https://www.youtube.com/@Lifeof_Shazzam",
      avatar: "/images/shazaam-life-avatar.jpg",
      focus: ["Cinema Reviews", "Travel Logs", "Conversations"],
    } as ChannelInfo,
  },

  featuredVideos: [
    {
      id: "oO8I0Ghtvj8",
      title: "New Tesla Roadster !! or SpaceShip?",
      category: "Tech Analysis",
      thumbnail: "/images/thumb-oO8I0Ghtvj8.jpg",
      url: "https://www.youtube.com/watch?v=oO8I0Ghtvj8",
      channel: "CallMeShazzam TECH",
    },
    {
      id: "I7E4bV5HBZg",
      title: "Vivo V80 | Zeiss Portrait Photography Review",
      category: "Hardware Audit",
      thumbnail: "/images/thumb-I7E4bV5HBZg.jpg",
      url: "https://www.youtube.com/watch?v=I7E4bV5HBZg",
      channel: "CallMeShazzam TECH",
    },
    {
      id: "cnAiJwT_tJY",
      title: "Please Don't Buy! | Samsung Tab S12 Review",
      category: "Consumer Warning",
      thumbnail: "/images/thumb-cnAiJwT_tJY.jpg",
      url: "https://www.youtube.com/watch?v=cnAiJwT_tJY",
      channel: "CallMeShazzam TECH",
    },
    {
      id: "ezvO3fWNU74",
      title: "The Substance | Unfiltered Cinema Opinion",
      category: "Film Review",
      thumbnail: "/images/thumb-ezvO3fWNU74.jpg",
      url: "https://www.youtube.com/watch?v=ezvO3fWNU74",
      channel: "LifeofShazzam",
    },
  ] as VideoItem[],
};
