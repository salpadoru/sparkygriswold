"use client";

import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, Play, X } from "lucide-react";
import { useState } from "react";
import { galleryImages, siteContent } from "@/lib/content";
import { eventItems } from "@/lib/generatedEvents";
import { formatEventDate } from "@/lib/events";

const nav = ["ABOUT", "SERVICES", "CLIENTS", "EVENTS", "MUSIC", "GALLERY", "CONTACT"];

const sectionHref: Record<string, string> = {
  ABOUT: "#about",
  SERVICES: "#services",
  CLIENTS: "#clients",
  EVENTS: "#events",
  MUSIC: "/music/",
  GALLERY: "#gallery",
  CONTACT: "#contact",
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#" className="brand" aria-label="Sparky Griswold home">
          <img src="/archive/logo.png" alt="Sparky Griswold" />
        </a>
        <nav className="desktop-nav">
          {nav.map((item) => (
            <a key={item} href={sectionHref[item]}>{item}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">BOOK / CONTACT</a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={30} />}
        </button>
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            {nav.map((item) => (
              <a key={item} href={sectionHref[item]} onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>BOOK / CONTACT</a>
          </nav>
        )}
      </header>

      <section className="archive-hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <div className="hero-actions">
            <a className="button button-solid" href="#contact">{siteContent.hero.primaryCta} <ArrowUpRight size={16} /></a>
            <a className="button button-outline" href="#gallery">{siteContent.hero.secondaryCta} <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-index">NYC • DJ • MUSIC • EVENTS</div>
      </section>

      <section id="about" className="intro-section section-grid">
        <div>
          <p className="section-kicker">01 / ABOUT</p>
          <h2>THE<br /><span>DJ</span></h2>
        </div>
        <div className="intro-copy">
          <p>{siteContent.archive.body}</p>
          <div className="rule" />
          <ul className="highlight-list">
            {siteContent.archive.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section id="services" className="events-section services-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / SERVICES</p>
            <h2>THE RIGHT<br /><span>SET</span></h2>
          </div>
          <p className="section-note">TAILORED DJ EXPERIENCES</p>
        </div>
        <p className="services-intro">{siteContent.servicesIntro}</p>
        <div className="event-list">
          {siteContent.services.map((service, index) => (
            <div className="event-row service-row" key={service.title}>
              <span>0{index + 1}</span>
              <strong>{service.title}</strong>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="clients" className="clients-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 / CLIENTS</p>
            <h2>TRUSTED<br /><span>BY</span></h2>
          </div>
          <p className="section-note">EVENTS • BRANDS • PRIVATE CLIENTS</p>
        </div>

        <div className="client-grid">
          {siteContent.clients.map((client) => (
            <article className="client-card" key={client.name}>
              <p className="client-role">{client.role}</p>
              <h3>{client.name}</h3>
              <p>{client.body}</p>
            </article>
          ))}
          <div className="client-image-tile" aria-hidden="true">
            <img src="https://sparkygriswold.com/wp-content/uploads/2015/04/19.jpg" alt="" />
          </div>
        </div>

        <div className="venues-block">
          <p className="section-kicker">SELECTED VENUES & EVENTS</p>
          <div className="venue-list">
            {siteContent.venues.map((venue) => <span key={venue}>{venue}</span>)}
          </div>
        </div>
      </section>

      <section id="events" className="events-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">04 / EVENTS</p>
            <h2>BUILT FOR<br /><span>THE ROOM</span></h2>
          </div>
          <p className="section-note">WEDDINGS • CORPORATE • CLUBS • FESTIVALS</p>
        </div>

        <div className="event-cards">
          {eventItems.map((event, index) => (
            <a className="event-card" key={event.id} href={`/events/${event.id}`}>
              <div className="event-card-image">
                {event.image && <img src={event.image} alt={event.title} />}
              </div>
              <div className="event-card-body">
                <div className="event-card-top">
                  <span>EVENT {String(index + 1).padStart(2, "0")}</span>
                  <span>{formatEventDate(event.date)}</span>
                </div>
                <h3>{event.title}</h3>
                <div className="event-card-meta">
                  <span>{event.venue}</span>
                  <span>{event.id === "dj-fridays" ? "1 PM" : "10 PM"}</span>
                </div>
                <div className="event-card-footer">
                  <span>{event.externalUrl?.includes("twitch.tv") ? "VISIT LINK" : "BOOK NOW"}</span>
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="music" className="music-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">05 / MUSIC</p>
            <h2>LISTEN<br /><span>BACK</span></h2>
          </div>
          <Play size={44} strokeWidth={1} />
        </div>

        <div className="mix-list">
          {siteContent.mixes.map((mix, index) => (
            <a className="mix-row" key={mix.title} href={mix.href} target="_blank" rel="noreferrer">
              <span>0{index + 1}</span>
              <strong>{mix.title}</strong>
              <em>{mix.meta}</em>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">06 / GALLERY</p>
            <h2>PHOTO<br /><span>ARCHIVE</span></h2>
          </div>
          <p className="section-note">LIVE EVENT PHOTO ARCHIVE</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <a className="gallery-card" key={image.number} href={image.full}>
              <img src={image.src} alt={image.name || `Sparky Griswold archive photograph ${image.number}`} />
              <div className="gallery-label">
                <span>{String(image.number).padStart(2, "0")}</span>
                <span>{image.year ?? "ARCHIVE"}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="section-kicker">07 / CONTACT</p>
          <h2>LET'S<br /><span>CONNECT.</span></h2>
        </div>
        <div className="contact-side">
          <p>Ready to book Sparky for a wedding, corporate event, club night, festival or private celebration? Get in touch to check availability and request a quote.</p>
          <div className="contact-details">
            <a href={"tel:" + siteContent.contact.phone}>{siteContent.contact.phone}</a>
            <a href={"mailto:" + siteContent.contact.email}>{siteContent.contact.email}</a>
          </div>
          <div className="social-row">
            <a href={siteContent.social.mixcloud} target="_blank" rel="noreferrer">MIXCLOUD ↗</a>
            <a href={siteContent.social.instagram} target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href={siteContent.social.x} target="_blank" rel="noreferrer">X ↗</a>
            <a href={siteContent.social.youtube} target="_blank" rel="noreferrer">YOUTUBE ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© SPARKY GRISWOLD</span>
        <span>DJ • MUSIC • EVENTS</span>
        <span>NEW YORK</span>
      </footer>
    </main>
  );
}
