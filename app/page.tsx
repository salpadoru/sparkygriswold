import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail, Music2, Phone } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
          <Link href="/" className="display text-2xl tracking-tight">SPARKY.</Link>
          <nav className="hidden gap-8 text-[11px] font-bold tracking-[.22em] md:flex">
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#mixes">MIXES</a>
            <a href="#events">EVENTS</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <a href="#contact" className="border border-white/30 px-4 py-2 text-[10px] font-bold tracking-[.2em]">BOOK NOW</a>
        </div>
      </header>

      <section className="relative min-h-[92vh] overflow-hidden grid-lines">
        <div className="hero-photo absolute inset-0" />
        <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_75%_50%,rgba(245,242,234,.16),transparent_31%)] md:w-[62%]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-36 md:px-10 md:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-bold tracking-[.35em] text-[var(--accent)]">{siteContent.hero.eyebrow}</p>
            <h1 className="display whitespace-pre-line text-[18vw] leading-[.8] md:text-[10.5rem]">{siteContent.hero.title}</h1>
            <div className="mt-10 grid max-w-2xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg">{siteContent.hero.body}</p>
              <div className="flex gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 text-xs font-black tracking-[.18em] text-black">
                  {siteContent.hero.primaryCta} <ArrowUpRight size={16} />
                </a>
                <a href="#mixes" className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-xs font-black tracking-[.18em]">
                  MIXES <Music2 size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[var(--line)] bg-[#191916]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[.9fr_1.1fr] md:px-10 md:py-32">
          <div>
            <p className="text-xs font-bold tracking-[.35em] text-white/40">ABOUT SPARKY</p>
            <h2 className="display mt-5 text-7xl leading-[.86] md:text-[7.5rem]">{siteContent.about.title}</h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-2xl text-2xl leading-tight text-white/75 md:text-4xl md:leading-tight">{siteContent.about.body}</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 flex items-end justify-between border-b border-[var(--line)] pb-6">
          <div>
            <p className="text-xs font-bold tracking-[.35em] text-white/40">WHAT SPARKY DOES</p>
            <h2 className="display mt-3 text-6xl md:text-8xl">SERVICES</h2>
          </div>
          <ArrowDownRight className="hidden md:block" size={42} strokeWidth={1.2} />
        </div>
        <div className="divide-y divide-white/10">
          {siteContent.services.map((service) => (
            <div key={service.number} className="grid gap-6 py-9 md:grid-cols-[90px_1fr_1.1fr] md:items-center">
              <span className="text-xs font-bold tracking-[.25em] text-[var(--accent)]">{service.number}</span>
              <h3 className="display text-5xl md:text-6xl">{service.title}</h3>
              <p className="max-w-lg text-white/55 md:text-lg md:leading-7">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mixes" className="bg-[#e8e5dd] px-6 py-24 text-[#10100f] md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold tracking-[.35em] opacity-50">LISTEN</p>
              <h2 className="display mt-3 text-7xl leading-none md:text-[8rem]">MIXES</h2>
            </div>
            <Music2 size={42} strokeWidth={1.2} />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteContent.mixes.map((mix, index) => (
              <article key={mix.title} className="group">
                <div className="aspect-square overflow-hidden bg-black">
                  <div className="flex h-full items-end justify-between p-6 text-white transition-transform duration-500 group-hover:scale-[1.02]">
                    <div>
                      <p className="text-[10px] font-bold tracking-[.25em] text-[var(--accent)]">MIX 0{index + 1}</p>
                      <h3 className="display mt-2 text-4xl">{mix.title}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-full border border-white/25" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-b border-black/15 pb-4 text-xs font-bold tracking-[.18em]">
                  <span>{mix.genre}</span>
                  <span>PLAY →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14">
          <p className="text-xs font-bold tracking-[.35em] text-white/40">WHERE TO FIND HIM</p>
          <h2 className="display mt-3 text-7xl md:text-[8rem]">EVENTS</h2>
        </div>
        <div className="border-t border-[var(--line)]">
          {siteContent.events.map((event) => (
            <div key={event.title + event.venue} className="grid gap-4 border-b border-[var(--line)] py-7 md:grid-cols-[1.2fr_.8fr_.5fr_.3fr] md:items-center">
              <div>
                <p className="text-lg font-semibold">{event.title}</p>
                <p className="mt-1 text-sm text-white/45">{event.venue}</p>
              </div>
              <span className="text-sm text-white/55">{event.city}</span>
              <span className="text-sm text-white/55">{event.date}</span>
              <ArrowUpRight className="hidden md:block justify-self-end" size={20} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[var(--accent)] px-6 py-24 text-black md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[.35em] opacity-55">LET'S MAKE SOME NOISE</p>
          <h2 className="display mt-5 max-w-6xl text-[16vw] leading-[.78] md:text-[10rem]">BOOK<br />SPARKY</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <a href="mailto:booking@sparkygriswold.com" className="flex items-center justify-between border-t border-black/20 py-5 font-bold">
              EMAIL <Mail size={20} />
            </a>
            <a href="tel:+10000000000" className="flex items-center justify-between border-t border-black/20 py-5 font-bold">
              CALL <Phone size={20} />
            </a>
            <a href="#" className="flex items-center justify-between border-t border-black/20 py-5 font-bold">
              INSTAGRAM <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 px-6 py-8 text-[10px] font-bold tracking-[.22em] text-white/35 md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} SPARKY GRISWOLD</span>
        <span>DJ • MUSIC • EVENTS</span>
      </footer>
    </main>
  );
}
