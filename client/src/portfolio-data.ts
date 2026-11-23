// OjdevTech profile settings. Add your GitHub and Discord URLs when ready.
export const profile = {
  name: "OjdevTech",
  wordmark: "OjdevTech",
  title: "Websites, apps & digital experiences built with intent.",
  email: "danielbenjamin.edu@yahoo.com",
  github: "",
  discord: "",
};

export type ProjectCategory = "Web Development" | "Mobile App";
export interface Project {
  title: string;
  category: ProjectCategory;
  image: string;
  url: string;
  description: string;
  longDescription?: string;
  details?: string;
  client?: string;
  credits?: string;
  liveUrl?: string;
  detailImage?: string;
}

// Reference showcase items retained from the supplied source. Replace with authorized OjdevTech work before publishing.
export const projects: Project[] = [
  { title: "Flight Local (B2B Travel Solution)", category: "Web Development", image: "/assets/portfolio/flight-local.jpg", url: "https://tamalsen.dev/project/flight-local/", description: "A B2B travel solution for ticketing, visas, hotels and holiday packages.", longDescription: "A travel and tourism experience bringing ticketing, visa services, holiday plans, tours and hotel options together in one digital platform.", client: "Saimon Global", details: "React · Material UI · GraphQL", liveUrl: "https://flightlocal.com/", detailImage: "/assets/portfolio/flight-detail.jpg" },
  { title: "AI Lab Initiative", category: "Web Development", image: "/assets/portfolio/ai-lab.jpg", url: "https://tamalsen.dev/project/ai-lab-granada/", description: "A digital presence for a technology and artificial intelligence initiative.", longDescription: "A digital home for an initiative bringing together talent, advanced technology and startup participation across health, industry and education." },
  { title: "Tryotel – Cross-Platform Travel App", category: "Mobile App", image: "/assets/portfolio/tryotel-app.jpg", url: "https://tamalsen.dev/project/tryotel-cross-platform-travel-app/", description: "A cross-platform travel app designed to make booking and travel easier.", longDescription: "A cross-platform mobile travel experience designed to make searching and booking easier for travelers.", client: "Saimon Global", details: "Flutter · BLoC · Clean architecture", liveUrl: "https://tryo.tel/app", detailImage: "/assets/portfolio/tryotel-app-detail.jpg" },
  { title: "Khora – Urban Thinkers Consulting Firm", category: "Web Development", image: "/assets/portfolio/khora.jpg", url: "https://tamalsen.dev/project/khora-urban-thinkers/", description: "A website for a creative consultancy working on sustainable urban challenges.", longDescription: "A people-centered digital presence for a consultancy working across urban planning, environment, technology and sustainable city solutions.", liveUrl: "https://khoraurbanthinkers.es/en/home-en/", detailImage: "/assets/portfolio/khora-detail.jpg" },
  { title: "Tapy – Download. Connect. Unlock.", category: "Web Development", image: "/assets/portfolio/tapy.jpg", url: "https://tamalsen.dev/project/tapy/", description: "A digital platform connecting customers and businesses through customized Taps.", longDescription: "A customer-engagement platform built around customized taps and marketing promotions.", liveUrl: "https://tapy.co/" },
  { title: "Walker IP Pty Ltd", category: "Web Development", image: "/assets/portfolio/walkerip.jpg", url: "https://tamalsen.dev/project/walkerip/", description: "A website for an innovative intellectual property firm.", longDescription: "A polished web presence for an intellectual property firm focused on long-term client success and strategic thinking.", client: "Neon Collective", credits: "Design: Neon Collective", liveUrl: "https://www.walkerip.com/" },
  { title: "Tryotel Web (B2C)", category: "Web Development", image: "/assets/portfolio/tryotel-web.jpg", url: "https://tamalsen.dev/project/tryotel-web-b2c/", description: "A travel booking web experience for cross-platform users.", longDescription: "A consumer-facing travel web experience designed to make flight discovery and booking easier.", client: "Saimon Global", liveUrl: "https://dev.tryotel.com/", detailImage: "/assets/portfolio/tryotel-web-detail.jpg" },
  { title: "Nordic Spa Website", category: "Web Development", image: "/assets/portfolio/kananaskis.jpg", url: "https://tamalsen.dev/project/kananaskis-nordic-spa-website/", description: "A website for a nature-inspired wellness and Nordic spa experience.", longDescription: "An atmospheric website introducing a restorative wellness destination and its treatments.", client: "Beks Marketing", liveUrl: "https://knordicspa.com/" },
  { title: "A Higher Thought", category: "Web Development", image: "/assets/portfolio/higher-thought.jpg", url: "https://tamalsen.dev/project/a-higher-thought/", description: "A platform for sharing short, uplifting and inspirational videos.", longDescription: "A platform for sharing short inspirational videos and bringing more appreciation, love and hope to the global conversation.", detailImage: "/assets/portfolio/higher-detail.jpg" },
];

export const projectPath = (project: Project) => `/project/${new URL(project.url).pathname.split("/").filter(Boolean).pop()}`;
