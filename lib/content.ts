export type EventItem = {
  title: string;
  venue: string;
  date: string;
  city: string;
};

export type MixItem = {
  title: string;
  genre: string;
  image: string;
};

export const siteContent = {
  hero: {
    eyebrow: "DJ • ENTERTAINER • MUSIC LOVER",
    title: "SPARKY\nGRISWOLD",
    body: "A high-energy DJ and entertainer bringing decades of music, personality and properly unforgettable nights to the room.",
    primaryCta: "BOOK SPARKY",
    secondaryCta: "LISTEN TO MIXES"
  },
  about: {
    title: "THE MAN\nBEHIND THE MUSIC",
    body: "From packed clubs to private celebrations, Sparky has built a career around reading the room, knowing the record and keeping the energy moving."
  },
  services: [
    { number: "01", title: "PRIVATE EVENTS", body: "Weddings, celebrations and parties that need a soundtrack with personality." },
    { number: "02", title: "CORPORATE", body: "Polished production, confident hosting and music that works for the room." },
    { number: "03", title: "CLUBS & FESTIVALS", body: "Big-room energy, deep crates and an instinct for what comes next." }
  ] as const,
  events: [
    { title: "UPCOMING LIVE SET", venue: "New York", date: "TBA", city: "NYC" },
    { title: "PRIVATE EVENT", venue: "Manhattan", date: "TBA", city: "NYC" },
    { title: "SPECIAL GUEST SET", venue: "TBA", date: "TBA", city: "USA" }
  ] satisfies EventItem[],
  mixes: [
    { title: "THE SPARKY SET", genre: "CLASSICS / DANCE", image: "/images/mix-01.svg" },
    { title: "FRIDAY NIGHT", genre: "HOUSE / DISCO", image: "/images/mix-02.svg" },
    { title: "AFTER DARK", genre: "ECLECTIC / CLUB", image: "/images/mix-03.svg" }
  ] satisfies MixItem[]
};
