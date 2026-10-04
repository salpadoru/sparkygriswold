-- Initial CMS schema for future admin-managed content.
create extension if not exists "pgcrypto";

create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  content jsonb not null default '{}'::jsonb,
  published boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  venue text,
  city text,
  event_date timestamptz,
  description text,
  image_url text,
  external_url text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists mixes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  genre text,
  audio_url text,
  cover_image_url text,
  description text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  caption text,
  image_url text not null,
  category text,
  event_id uuid references events(id) on delete set null,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  quote text not null,
  photo_url text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table site_settings enable row level security;
alter table pages enable row level security;
alter table events enable row level security;
alter table mixes enable row level security;
alter table gallery enable row level security;
alter table testimonials enable row level security;

create policy "Public can read published pages"
  on pages for select using (published = true);

create policy "Public can read published events"
  on events for select using (published = true);

create policy "Public can read published mixes"
  on mixes for select using (published = true);

create policy "Public can read published gallery"
  on gallery for select using (published = true);

create policy "Public can read published testimonials"
  on testimonials for select using (published = true);
