import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { siteContent } from "@/lib/content";

const mixcloudFeeds = [
  "https://player-widget.mixcloud.com/widget/iframe/?feed=%2FSparkyGriswold%2Fsparky-griswold-presentssummer-vacation%2F",
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

      <section className="music-feeds music-card-grid" aria-label="Mixcloud music">
        {siteContent.mixes.slice(1).map((mix, index) => (
          <article className="music-feed-card" key={mix.href}>
            <div className="music-player">
              <iframe
                src={mixcloudFeeds[index + 1]}
                title={mix.title}
                width="100%"
                height="520"
                frameBorder="0"
                allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share"
              />
            </div>
          </article>
        ))}
        <a className="music-listen-all" href={siteContent.social.mixcloud} target="_blank" rel="noreferrer">
          LISTEN ALL ↗
        </a>
      </section>
    </main>
  );
}
