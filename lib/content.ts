export type ServiceItem = { title: string; body: string };
export type ClientItem = { name: string; role: string; body: string };

export { galleryImages } from "./generatedGallery";

export const siteContent = {
  hero: {
    eyebrow: "DJ • MUSIC • EVENTS",
    title: "SPARKY\nGRISWOLD",
    body: "Sparky is a passionate, open-format DJ known for high-energy sets that blend fresh tracks with timeless classics. With 15+ years in the New York tri-state area, he brings an eclectic musical style and unmatched crowd-reading skills to every event.",
    primaryCta: "BOOK SPARKY",
    secondaryCta: "VIEW GALLERY",
  },
  archive: {
    title: "THE DJ",
    body: "Sparky has a very strong passion and love for music. His typical open format DJ sets take his audience on a musical journey spanning many different genres, introducing his crowd to the newest songs, and seamlessly being able to transition it all together with timeless classics. This deep-seated love for music is the driving force behind every set, ensuring a vibrant and engaging experience for everyone. Whether it's a nightclub, corporate event, wedding, or any other occasion, Sparky guarantees to rock the house and provide a unique and entertaining experience. With over 15+ years in the New York tri-state area, Sparky has built a strong following DJing all different types of events, including high profile clients and celebrities. He's held residencies at the exclusive Norwood Club in NYC (5+ years) and for notable corporate clients such as Neiman Marcus for their fashion events (6+ years).",
    highlights: [
      "15+ years in the New York tri-state area",
      "5+ year residency at Norwood Club, NYC",
      "6+ years with Neiman Marcus fashion events",
      "Nightclubs, corporate events, weddings and private celebrations",
      "High-profile clients, celebrities and major NYC events",
    ],
  },
  servicesIntro: "Tailored DJ experiences for any event, delivering exceptional music selection and professional performance to create the perfect atmosphere.",
  services: [
    { title: "WEDDING DJ", body: "Create unforgettable moments for your special day with customized music selection from ceremony to reception." },
    { title: "CORPORATE EVENTS", body: "Professional DJ services for company parties, product launches, and corporate gatherings." },
    { title: "CLUB & FESTIVAL", body: "High-energy performances for nightclubs, music festivals and large-scale events." },
  ] satisfies ServiceItem[],
  mixes: [
    { title: "SPARKY GRISWOLD / MIXCLOUD", meta: "LIVE SETS + STUDIO MIXES", href: "https://www.mixcloud.com/SparkyGriswold/" },
    { title: "SUMMER VACATION", meta: "MIXCLOUD", href: "https://www.mixcloud.com/SparkyGriswold/sparky-griswold-presentssummer-vacation/" },
    { title: "SUMMER AT SPARKY'S", meta: "MIXCLOUD", href: "https://www.mixcloud.com/SparkyGriswold/summer-at-sparkys/" },
  ],
  clients: [
    { name: "Hayley and Jacob Gregus", role: "WEDDING CLIENT", body: "Sparky Griswold was the DJ at the wedding of my father and step-mother. When I got engaged, we didn’t even consider working with any other DJs – we liked Sparky so much! During the planning process of our wedding, Sparky was flexible, and easy to get in touch with. The music played at our wedding flowed perfectly – all our guests (of all ages) told us that they had a blast and loved the DJ. We would certainly work with Ron again in the future. Thanks for helping to make our Big Day so special, Sparky!" },
    { name: "Nicole Egan", role: "PUBLIC RELATIONS COORDINATOR • NEIMAN MARCUS", body: "Sparky has been DJing our in store promotional events at Neiman Marcus for over the past year and we always enjoy having him here. The response to Sparky’s DJ sets has been overwhelmingly positive and he has built a very strong connection to our staff and customers. We can’t wait to have him back again for our next event!" },
    { name: "PeeJay Bodoy", role: "MANAGING PARTNER • PG-CONSULTING NYC", body: "I have had the privilege of working with Sparky for several years at many different venues (Demi Monde, Norwood Club, 9A NYC, 41 North Hotel). He is consistently a huge hit with the venue staff and crowd, and his parties have established a very strong presence and following in the local nightlife scene." },
    { name: "Teddy Namuleg", role: "GENERAL MANAGER • NORWOOD CLUB", body: "We have been very fortunate to have Sparky as our resident DJ at Norwood Club since 2012. His parties (“Sparky Saturdays”, New Years, Halloween, private events, etc.) have created many memorable nights for us, and he is a crowd favorite with our private members and their guests." },
    { name: "Damien Lemon", role: "COMEDIAN • MTV2 GUY CODE / COMEDY CENTRAL", body: "Sparky Griswold is one of my favorite new DJs in NYC. He’s so good I’m writing a testimonial. Who writes a testimonial for a DJ??! Anyway, he knows how to rock a crowd. I asked him to DJ my first headlining gig at Caroline’s Comedy Club—he killed it and has spun at every one of my big NYC shows since." },
    { name: "Caroline Nelson", role: "DIRECTOR OF EVENTS • TRI HOSPITALITY GROUP", body: "Sparky DJed a large holiday event for one of my corporate clients this past year at VIP Room, New York. His DJ set truly made the night and was extremely inventive. I will absolutely keep him in mind for future bookings and private events." },
    { name: "Brian Del Vecchio", role: "VICE PRESIDENT • PRIVATE WEALTH ADVISOR • MORGAN STANLEY", body: "I hired Sparky to DJ our company party last year for my division of Morgan Stanley. I received tons of unsolicited positive feedback from our staff that it was the ‘best idea ever’, and there’s no question that Sparky made it a night for us all to remember. Sparky created a great vibe and everyone was dancing and having fun all night long!" },
    { name: "Stephanie George-Bombaci", role: "EXECUTIVE DIRECTOR • NYPACE", body: "Sparky DJed NYPACE’s annual benefit at Soho House NY this past year and did a phenomenal job. He created a great atmosphere, making our event a big hit and such a huge success. It was great working with Sparky and he was extremely helpful along the way. We are looking forward to working with him again for our future events." },
  ] satisfies ClientItem[],
  venues: [
    "The NoMad Hotel", "Soho House", "Tribeca Rooftop + Tribeca 360°", "VIP Room", "Goldbar", "HILO",
    "The Park", "The Soho Grand Hotel", "Demi Monde", "Santos Party House", "Bathhouse Studios",
    "Leila Heller Art Gallery", "9A NYC", "Pianos", "Caroline's on Broadway", "Subculture New York",
    "The Graham Bar Brooklyn", "The Ritz-Carlton White Plains", "41 North Hotel", "Peekskill Mother's Yay! Market",
    "Peekskill HoliYay! Market", "River Outpost Brewing Company",
  ],
  contact: { phone: "917-731-8669", email: "info@sparkygriswold.com", location: "New York" },
  social: {
    mixcloud: "https://www.mixcloud.com/SparkyGriswold/",
    instagram: "https://www.instagram.com/sparkygriswold/",
    x: "https://x.com/sparkygriswold",
    youtube: "https://www.youtube.com/channel/UC35VgUHjggiefJFCCfNVxJw",
  },
};
