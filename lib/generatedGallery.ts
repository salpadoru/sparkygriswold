export type GalleryImage = {
  number: number;
  src: string;
  full: string;
  name: string;
};

const archiveBase = "https://sparkygriswold.com/wp-content/uploads/2015/04";

export const galleryImages: GalleryImage[] = [
  { number: 1, src: `${archiveBase}/19.jpg`, full: `${archiveBase}/19.jpg`, name: "DJ booth" },
  { number: 2, src: `${archiveBase}/38.jpg`, full: `${archiveBase}/38.jpg`, name: "Dance floor" },
  { number: 3, src: `${archiveBase}/29.jpg`, full: `${archiveBase}/29.jpg`, name: "Crowd" },
  { number: 4, src: `${archiveBase}/16.jpg`, full: `${archiveBase}/16.jpg`, name: "DJ set" },
  { number: 5, src: `${archiveBase}/18.jpg`, full: `${archiveBase}/18.jpg`, name: "DJ event" },
  { number: 6, src: `${archiveBase}/25.jpg`, full: `${archiveBase}/25.jpg`, name: "Neiman Marcus event" },
  { number: 7, src: `${archiveBase}/21.jpg`, full: `${archiveBase}/21.jpg`, name: "DJ performance" },
  { number: 8, src: `${archiveBase}/23.jpg`, full: `${archiveBase}/23.jpg`, name: "Club set" },
  { number: 9, src: `${archiveBase}/36.jpg`, full: `${archiveBase}/36.jpg`, name: "Dance floor" },
  { number: 10, src: `${archiveBase}/5.jpg`, full: `${archiveBase}/5.jpg`, name: "Event portrait" },
  { number: 11, src: `${archiveBase}/14.jpg`, full: `${archiveBase}/14.jpg`, name: "Event portrait" },
  { number: 12, src: `${archiveBase}/20.jpg`, full: `${archiveBase}/20.jpg`, name: "DJ performance" },
];
