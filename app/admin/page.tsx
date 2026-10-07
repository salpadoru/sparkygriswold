"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient, type Session } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase = url && key ? createClient(url, key) : null;

type GalleryItem = {
  id: string; title: string; caption: string; image_path: string;
  published: boolean; sort_order: number;
};
type EventItem = {
  id: string; title: string; venue: string; city: string;
  event_date: string | null; description: string; published: boolean;
  sort_order: number;
};

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [tab, setTab] = useState<"gallery" | "events">("gallery");
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  useEffect(() => {
    if (!supabase) { setReady(true); return; }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      if (!next) setAuthorized(false);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) void loadContent();
  }, [session]);

  async function loadContent() {
    if (!supabase || !session) return;
    const [admin, g, e] = await Promise.all([
      supabase.from("admin_users").select("user_id").eq("user_id", session.user.id).maybeSingle(),
      supabase.from("gallery").select("id,title,caption,image_path,published,sort_order").order("sort_order"),
      supabase.from("events").select("id,title,venue,city,event_date,description,published,sort_order").order("event_date", { ascending: true }),
    ]);
    setAuthorized(Boolean(admin.data));
    setGallery(g.data ?? []);
    setEvents(e.data ?? []);
    const error = g.error?.message || e.error?.message;
    if (error) setMessage(error);
  }

  async function login(e: FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error?.message ?? "");
    setBusy(false);
  }

  async function addGallery(e: FormEvent) {
    e.preventDefault();
    if (!supabase || !file) return;
    setBusy(true);
    const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
    const upload = await supabase.storage.from("gallery").upload(path, file);
    if (upload.error) { setMessage(upload.error.message); setBusy(false); return; }
    const result = await supabase.from("gallery").insert({
      title, caption, image_path: path, sort_order: gallery.length, published: true
    });
    if (result.error) {
      await supabase.storage.from("gallery").remove([path]);
      setMessage(result.error.message);
    } else {
      setTitle(""); setCaption(""); setFile(null);
      await loadContent();
      setMessage("Photo saved. Run GitHub Actions → Publish Content to update the public site.");
    }
    setBusy(false);
  }

  async function addEvent(e: FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setBusy(true);
    const result = await supabase.from("events").insert({
      title: eventTitle, event_date: eventDate || null, venue: eventVenue,
      city: eventCity, description: eventDescription, sort_order: events.length, published: true
    });
    if (result.error) setMessage(result.error.message);
    else {
      setEventTitle(""); setEventDate(""); setEventVenue(""); setEventCity(""); setEventDescription("");
      await loadContent();
      setMessage("Event saved. Run GitHub Actions → Publish Content to update the public site.");
    }
    setBusy(false);
  }

  async function toggle(table: "gallery" | "events", id: string, published: boolean) {
    if (!supabase) return;
    await supabase.from(table).update({ published: !published }).eq("id", id);
    await loadContent();
  }

  async function removeGallery(item: GalleryItem) {
    if (!supabase || !confirm(`Delete ${item.title || "this photo"}?`)) return;
    await supabase.from("gallery").delete().eq("id", item.id);
    await supabase.storage.from("gallery").remove([item.image_path]);
    await loadContent();
  }

  async function removeEvent(item: EventItem) {
    if (!supabase || !confirm(`Delete ${item.title}?`)) return;
    await supabase.from("events").delete().eq("id", item.id);
    await loadContent();
  }

  if (!ready) return <main className="admin-page"><p>Loading…</p></main>;

  if (!supabase) return (
    <main className="admin-page"><div className="admin-card">
      <p className="admin-kicker">SPARKY GRISWOLD / ADMIN</p>
      <h1>SUPABASE NOT CONFIGURED</h1>
      <p>Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY for the admin interface.</p>
    </div></main>
  );

  if (!session) return (
    <main className="admin-page"><form className="admin-card admin-form" onSubmit={login}>
      <p className="admin-kicker">SPARKY GRISWOLD / ADMIN</p><h1>CONTENT LOGIN</h1>
      <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
      <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
      <button disabled={busy}>{busy ? "SIGNING IN…" : "SIGN IN"}</button>
      {message && <p className="admin-message">{message}</p>}
    </form></main>
  );

  if (!authorized) return (
    <main className="admin-page"><div className="admin-card">
      <p className="admin-kicker">SPARKY GRISWOLD / ADMIN</p><h1>NOT AUTHORISED</h1>
      <p>Your Supabase account is not listed in admin_users.</p>
      <button onClick={() => supabase.auth.signOut()}>SIGN OUT</button>
    </div></main>
  );

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div><p className="admin-kicker">SPARKY GRISWOLD / ADMIN</p><h1>CONTENT MANAGER</h1></div>
        <button onClick={() => supabase.auth.signOut()}>SIGN OUT</button>
      </header>
      <div className="admin-tabs">
        <button className={tab === "gallery" ? "active" : ""} onClick={() => setTab("gallery")}>GALLERY</button>
        <button className={tab === "events" ? "active" : ""} onClick={() => setTab("events")}>EVENTS</button>
      </div>
      {message && <div className="admin-notice">{message}</div>}

      {tab === "gallery" ? <section className="admin-section">
        <form className="admin-card admin-form" onSubmit={addGallery}>
          <h2>ADD PHOTO</h2>
          <label>Photo<input type="file" accept="image/jpeg,image/png,image/webp" onChange={e => setFile(e.target.files?.[0] ?? null)} required /></label>
          <label>Title<input value={title} onChange={e => setTitle(e.target.value)} /></label>
          <label>Caption<input value={caption} onChange={e => setCaption(e.target.value)} /></label>
          <button disabled={busy || !file}>SAVE PHOTO</button>
        </form>
        <div className="admin-list">{gallery.map(item => <article className="admin-row" key={item.id}>
          <div><strong>{item.title || "Untitled photo"}</strong><small>{item.caption}</small></div>
          <span>{item.published ? "PUBLISHED" : "HIDDEN"}</span>
          <button onClick={() => toggle("gallery", item.id, item.published)}>{item.published ? "HIDE" : "PUBLISH"}</button>
          <button onClick={() => removeGallery(item)}>DELETE</button>
        </article>)}</div>
      </section> : <section className="admin-section">
        <form className="admin-card admin-form" onSubmit={addEvent}>
          <h2>ADD EVENT</h2>
          <label>Title<input value={eventTitle} onChange={e => setEventTitle(e.target.value)} required /></label>
          <label>Date<input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} /></label>
          <label>Venue<input value={eventVenue} onChange={e => setEventVenue(e.target.value)} /></label>
          <label>City<input value={eventCity} onChange={e => setEventCity(e.target.value)} /></label>
          <label>Description<textarea rows={4} value={eventDescription} onChange={e => setEventDescription(e.target.value)} /></label>
          <button disabled={busy}>SAVE EVENT</button>
        </form>
        <div className="admin-list">{events.map(item => <article className="admin-row" key={item.id}>
          <div><strong>{item.title}</strong><small>{item.event_date ?? "DATE TBC"} • {item.venue}{item.city ? ` • ${item.city}` : ""}</small></div>
          <span>{item.published ? "PUBLISHED" : "HIDDEN"}</span>
          <button onClick={() => toggle("events", item.id, item.published)}>{item.published ? "HIDE" : "PUBLISH"}</button>
          <button onClick={() => removeEvent(item)}>DELETE</button>
        </article>)}</div>
      </section>}

      <footer className="admin-footer"><strong>PUBLIC SITE DOES NOT QUERY SUPABASE.</strong><span>Save here, then run GitHub Actions → Publish Content.</span></footer>
    </main>
  );
}
