import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { siteContent } from "@/lib/content";

const oldSiteImages = [
  "https://sparkygriswold.com/wp-content/uploads/2015/04/19.jpg",
  "https://sparkygriswold.com/wp-content/uploads/2015/04/21.jpg",
  "https://sparkygriswold.com/wp-content/uploads/2015/04/16.jpg",
];

const mixcloudFeeds = [
  "https://player-widget.mixcloud.com/widget/iframe/?feed=%2FSparkyGriswold%2F",
  "https://player-widget.mixcloud.com/widget/iframe/?feed=%2FSparkyGriswold%2Fsparky-griswold-presentssummer-vacation%2F",
  "https://player-widget.mixcloud.com/widget/iframe/?feed=%2FSparkyGriswold%2Fsummer-at-sparkys%2F",
];

export default function MusicPage() {
  return (
    <main className="music-page">
      <header className="music-page-header">
        <a href="/" className="music-back"><ArrowLeft size={16} /> BACK</a>
        <span>SPARKY GRISWOLD</span>
        <a href={siteContent.social.mixcloud} target="_blank" rel="noreferrer">MIXCLOUD ↗</a>
      </header>

      <section className="music-page-intro">
        <div>
          <p className="section-kicker">05 / MUSIC</p>
          <h1>EXPLORE<br /><span>ON MIXCLOUD</span></h1>
        </div>
        <p>Explore on Mixcloud</p>
      </section>

      <section className="music-photo-strip" aria-label="Sparky Griswold archive photographs">
        {oldSiteImages.map((src, index) => (
          <div className="music-photo" key={src}>
            <img src={src} alt={`Sparky Griswold archive photograph ${index + 1}`} />
          </div>
        ))}
      </section>

      <section className="music-feeds">
        {siteContent.mixes.map((mix, index) => (
          <article className="music-feed-card" key={mix.href}>
            <div className="music-feed-heading">
              <span>0{index + 1}</span>
              <div>
                <h2>{mix.title}</h2>
                <p>{mix.meta}</p>
              </div>
              <a href={mix.href} target="_blank" rel="noreferrer" aria-label={`Open ${mix.title} on Mixcloud`}>
                <ArrowUpRight size={22} />
              </a>
            </div>
            <div className="music-player">
              <iframe
                src={mixcloudFeeds[index] ?? mix.href}
                title={mix.title}
                width="100%"
                height="400"
                frameBorder="0"
                allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share"
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
