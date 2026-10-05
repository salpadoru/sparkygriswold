import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import { galleryImages, siteContent } from "@/lib/content";

const nav = ["ABOUT", "CLIENTS", "EVENTS", "MUSIC", "GALLERY", "BLOG", "CONTACT"];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#" className="brand" aria-label="Sparky Griswold home">
          <img src="/archive/logo.png" alt="Sparky Griswold" />
        </a>
        <nav>
          {nav.map((item) => (
            <a key={item} href={item === "GALLERY" ? "#gallery" : item === "MUSIC" ? "#music" : item === "EVENTS" ? "#events" : item === "CONTACT" ? "#contact" : "#about"}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">BOOK / CONTACT</a>
      </header>

      <section className="archive-hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="hero-copy">{siteContent.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-solid" href="#contact">{siteContent.hero.primaryCta} <ArrowUpRight size={16} /></a>
            <a className="button button-outline" href="#gallery">{siteContent.hero.secondaryCta} <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-index">001 / 2018 ARCHIVE</div>
      </section>

      <section id="about" className="intro-section section-grid">
        <div>
          <p className="section-kicker">01 / ABOUT</p>
          <h2>THE<br /><span>ARCHIVE</span></h2>
        </div>
        <div className="intro-copy">
          <p>{siteContent.archive.body}</p>
          <div className="rule" />
          <p className="small-copy">Recovered from the archived Sparky Griswold website and being rebuilt as a modern, content-first site.</p>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / GALLERY</p>
            <h2>FORTY<br /><span>MEMORIES</span></h2>
          </div>
          <p className="section-note">THE ORIGINAL ARCHIVE</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <a className="gallery-card" key={image.number} href={image.full}>
              <img
                src={image.src}
                alt={`Sparky Griswold archive photograph ${image.number}`}
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
              <span>{String(image.number).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="music" className="music-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 / MUSIC</p>
            <h2>LISTEN<br /><span>BACK</span></h2>
          </div>
          <Play size={44} strokeWidth={1} />
        </div>

        <div className="mix-list">
          {siteContent.mixes.map((mix, index) => (
            <a className="mix-row" key={mix.title} href="#" onClick={(event) => event.preventDefault()}>
              <span>0{index + 1}</span>
              <strong>{mix.title}</strong>
              <em>{mix.meta}</em>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      <section id="events" className="events-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">04 / EVENTS</p>
            <h2>EVENTS<br /><span>ARCHIVE</span></h2>
          </div>
        </div>

        <div className="event-list">
          {siteContent.events.map((event, index) => (
            <div className="event-row" key={event.title}>
              <span>0{index + 1}</span>
              <strong>{event.title}</strong>
              <span>{event.venue || "SPARKY GRISWOLD"}</span>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="section-kicker">05 / CONTACT</p>
          <h2>LET'S<br /><span>CONNECT.</span></h2>
        </div>
        <div className="contact-side">
          <p>CONTACT DETAILS, BOOKING INFORMATION AND THE RECOVERED CLIENT CONTENT WILL BE ADDED AS THE ARCHIVE REBUILD CONTINUES.</p>
          <div className="social-row">
            <a href="https://instagram.com/sparkygriswold" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href="https://twitter.com/sparkygriswold" target="_blank" rel="noreferrer">TWITTER ↗</a>
            <a href="https://www.youtube.com/channel/UC35VgUHjggiefJFCCfNVxJw" target="_blank" rel="noreferrer">YOUTUBE ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© SPARKY GRISWOLD</span>
        <span>DJ • MUSIC • EVENTS</span>
        <span>ARCHIVE REBUILD / 2026</span>
      </footer>
    </main>
  );
}
