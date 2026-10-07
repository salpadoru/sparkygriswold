export type EventItem = {
  title: string;
  venue: string;
  date: string;
  city: string;
};

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
    body: "Open-format DJ sets that move across genres, blend new music with timeless classics, and keep the room moving. Weddings, corporate events, clubs, festivals and everything in between.",
    primaryCta: "BOOK SPARKY",
    secondaryCta: "VIEW GALLERY",
  },
  archive: {
    title: "THE DJ",
    body: "Sparky brings more than 15 years of DJ experience in the New York tri-state area, with a deep love of music and a knack for reading the room. His sets are built as a musical journey — eclectic, energetic and tailored to the crowd.",
    highlights: [
      "15+ years DJing across the New York tri-state area",
      "5+ year residency at Norwood Club, NYC",
      "6+ years working with Neiman Marcus fashion events",
      "Nightlife, weddings, corporate events, festivals and private events",
    ],
  },
  services: [
    {
      title: "WEDDINGS",
      body: "A customised soundtrack from ceremony through reception, built around the couple and the crowd.",
    },
    {
      title: "CORPORATE",
      body: "Professional DJ services for company parties, launches, fashion events and celebrations.",
    },
    {
      title: "CLUB & FESTIVAL",
      body: "High-energy sets for clubs, festivals and large events — with music selection shaped to the room.",
    },
  ] satisfies ServiceItem[],
  mixes: [
    {
      title: "Sparky Griswold Presents...Summer '26 (Knicks in Five!)",
      meta: "MIXCLOUD • 2026",
      href: "https://www.mixcloud.com/",
    },
    {
      title: "Summer at Sparkys",
      meta: "MIXCLOUD • ARCHIVE",
      href: "https://www.mixcloud.com/",
    },
  ],
  events: [
    { title: "WEDDINGS", venue: "PRIVATE EVENTS", date: "", city: "NEW YORK" },
    { title: "CORPORATE EVENTS", venue: "BRANDS & COMPANIES", date: "", city: "NEW YORK" },
    { title: "CLUBS & FESTIVALS", venue: "NIGHTLIFE", date: "", city: "NEW YORK" },
  ] satisfies EventItem[],
  clients: [
    {
      name: "Hayley & Jacob Gregus",
      role: "WEDDING",
      body: "They chose Sparky after seeing him DJ a family wedding and praised his flexibility, communication and ability to keep guests of all ages dancing.",
    },
    {
      name: "NYPACE",
      role: "ANNUAL BENEFIT • SOHO HOUSE NY",
      body: "Sparky was praised for creating the atmosphere that helped turn the annual benefit into a successful and memorable event.",
    },
    {
      name: "Morgan Stanley",
      role: "CORPORATE EVENT",
      body: "Sparky was brought in for a company party and received strong feedback for creating an energetic atmosphere that kept people dancing.",
    },
  ] satisfies ClientItem[],
  venues: [
    "The NoMad Hotel",
    "Soho House",
    "Tribeca Rooftop + Tribeca 360°",
    "VIP Room",
    "Goldbar",
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
    "Rock and Soul NYC",
    "41 North Hotel",
    "River Outpost Brewing Company",
  ],
  contact: {
    phone: "917-731-8669",
    email: "info@sparkygriswold.com",
  },
};
