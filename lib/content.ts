export type EventItem = {
  title: string;
  venue: string;
  date: string;
  city: string;
};

export const galleryImages = Array.from({ length: 40 }, (_, index) => index + 1).map(
  (number) => ({
    number,
    src: `/archive/${number}-150x150.jpg`,
    full: `/archive/${number}.jpg`,
  })
);

export const siteContent = {
  hero: {
    eyebrow: "DJ • MUSIC • EVENTS",
    title: "SPARKY\nGRISWOLD",
    body: "The original Sparky Griswold site, reimagined as a clean modern home for the music, events and archive.",
    primaryCta: "CONTACT",
    secondaryCta: "VIEW GALLERY",
  },
  archive: {
    title: "THE ARCHIVE",
    body: "The 2018 site featured a gallery of 40 photographs, music, events, clients and a blog. The new site keeps that character while giving the material a much cleaner presentation.",
  },
  mixes: [
    { title: "Summer at Sparkys", meta: "MIXCLOUD" },
    { title: "The Holiday Hangover", meta: "MIXCLOUD" },
  ],
  events: [
    { title: "Thursday, December 31st", venue: "", date: "", city: "" },
    { title: "Friday, December 19th", venue: "", date: "", city: "" },
    { title: "Saturday, December 12th", venue: "", date: "", city: "" },
    { title: "Friday, December 11th", venue: "", date: "", city: "" },
    { title: "Saturdays, November-December", venue: "", date: "", city: "" },
  ] satisfies EventItem[],
};
