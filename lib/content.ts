export type ServiceItem = {
  title: string;
  body: string;
};

export type ClientItem = {
  name: string;
  role: string;
  body: string;
};

export { galleryImages } from "./generatedGallery";

export const siteContent = {
  hero: {
    eyebrow: "DJ • MUSIC • EVENTS",
    title: "SPARKY\nGRISWOLD",
    body: "Passionate, versatile, open-format DJ sets spanning genres, bringing new music together with timeless classics and a strong instinct for the room. Weddings, corporate events, clubs, festivals and more.",
    primaryCta: "BOOK SPARKY",
    secondaryCta: "VIEW GALLERY",
  },
  archive: {
    title: "THE DJ",
    body: "Sparky has a strong passion and love for music. His open-format sets take audiences on a musical journey across many genres, introducing new songs while seamlessly connecting them with timeless classics. He is known for reading the crowd, adapting to different audiences and creating an energetic, entertaining experience.",
    highlights: [
      "15+ years in the New York tri-state area",
      "5+ year residency at Norwood Club, NYC",
      "6+ years with Neiman Marcus fashion and in-store promotional events",
      "Experience across nightclubs, corporate events, weddings and other occasions",
      "High-profile clients and celebrity events",
    ],
  },
  servicesIntro: "Tailored DJ experiences for any event, delivering exceptional music selection and professional performance to create the perfect atmosphere.",
  services: [
    {
      title: "WEDDING DJ",
      body: "Create unforgettable moments with customised music selection from ceremony through reception.",
    },
    {
      title: "CORPORATE EVENTS",
      body: "Professional DJ services for company parties, product launches and corporate gatherings.",
    },
    {
      title: "CLUB & FESTIVAL",
      body: "High-energy performances for nightclubs, music festivals and large-scale events.",
    },
  ] satisfies ServiceItem[],
  mixes: [
    {
      title: "SPARKY GRISWOLD ON MIXCLOUD",
      meta: "MIXCLOUD • LISTEN TO MIXES",
      href: "https://www.mixcloud.com/SparkyGriswold/",
    },
  ],
  clients: [
    {
      name: "Hayley & Jacob Gregus",
      role: "WEDDING CLIENT",
      body: "They selected Sparky after seeing him DJ a family wedding. They praised his flexibility, easy communication and ability to keep guests of all ages enjoying the music.",
    },
    {
      name: "Jessica Miller",
      role: "WEDDING CLIENT",
      body: "A wedding client described Sparky as the highlight of the celebration, balancing requested songs with his own selections and keeping the dance floor packed.",
    },
    {
      name: "Nicole Egan",
      role: "PUBLIC RELATIONS COORDINATOR • NEIMAN MARCUS",
      body: "Neiman Marcus valued Sparky for its in-store promotional events, noting the strong response from staff and customers and the connection he built with the audience.",
    },
    {
      name: "Caroline Nelson",
      role: "DIRECTOR OF EVENTS • TRI HOSPITALITY GROUP",
      body: "Sparky's DJ set at a corporate holiday event at VIP Room was praised as inventive and instrumental in making the night a success.",
    },
    {
      name: "Brian Del Vecchio",
      role: "VICE PRESIDENT • MORGAN STANLEY",
      body: "After a Morgan Stanley company party, Brian reported strong unsolicited feedback from staff and credited Sparky with creating a great vibe that kept people dancing.",
    },
    {
      name: "Stephanie George-Bombaci",
      role: "EXECUTIVE DIRECTOR • NYPACE",
      body: "Sparky DJed NYPACE's annual benefit at Soho House NY and was praised for creating a great atmosphere, being helpful throughout the process and contributing to a successful event.",
    },
  ] satisfies ClientItem[],
  venues: [
    "The NoMad Hotel",
    "Soho House",
    "Tribeca Rooftop + Tribeca 360°",
    "VIP Room",
    "Goldbar",
    "HILO",
    "The Park",
    "The Soho Grand Hotel",
    "Demi Monde",
    "Santos Party House",
    "Bathhouse Studios",
    "Leila Heller Art Gallery",
    "9A NYC",
    "Pianos",
    "Caroline's on Broadway",
    "Subculture New York",
    "The Graham Bar Brooklyn",
    "The Ritz-Carlton White Plains",
    "41 North Hotel",
    "Rock and Soul NYC",
    "River Outpost Brewing Company",
  ],
  contact: {
    phone: "917-731-8669",
    email: "info@sparkygriswold.com",
  },
  social: {
    mixcloud: "https://www.mixcloud.com/SparkyGriswold/",
    instagram: "https://www.instagram.com/sparkygriswold/",
    x: "https://x.com/sparkygriswold",
    youtube: "https://www.youtube.com/channel/UC35VgUHjggiefJFCCfNVxJw",
  },
};
