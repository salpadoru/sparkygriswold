-- Sparky Griswold CMS schema
-- Supabase Auth protects admin writes. No secrets belong in this file.

create extension if not exists "pgcrypto";

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  content jsonb not null default '{}'::jsonb,
  published boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  venue text not null default '',
  city text not null default '',
  event_date timestamptz,
  description text not null default '',
  image_path text,
  external_url text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.mixes (
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

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null default '',
  caption text not null default '',
  year integer,
  image_path text not null,
  category text not null default 'archive',
  event_id uuid references public.events(id) on delete set null,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.gallery add column if not exists year integer;

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  quote text not null,
  photo_url text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
$$;

alter table public.admin_users enable row level security;
alter table public.site_settings enable row level security;
alter table public.pages enable row level security;
alter table public.events enable row level security;
alter table public.mixes enable row level security;
alter table public.gallery enable row level security;
alter table public.testimonials enable row level security;

-- Public read access is limited to published content.
create policy "Public can read published pages" on public.pages
  for select to anon, authenticated using (published = true or public.is_admin());

create policy "Public can read published events" on public.events
  for select to anon, authenticated using (published = true or public.is_admin());

create policy "Public can read published mixes" on public.mixes
  for select to anon, authenticated using (published = true or public.is_admin());

create policy "Public can read published gallery" on public.gallery
  for select to anon, authenticated using (published = true or public.is_admin());

create policy "Public can read published testimonials" on public.testimonials
  for select to anon, authenticated using (published = true or public.is_admin());

create policy "Admins can read admin users" on public.admin_users
  for select to authenticated using (public.is_admin());

-- Admin-only content management.
create policy "Admins manage pages" on public.pages
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage events" on public.events
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage mixes" on public.mixes
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage gallery" on public.gallery
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage testimonials" on public.testimonials
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "Admins manage site settings" on public.site_settings
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Gallery image storage.
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do update set public = true;

create policy "Public can view gallery files"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'gallery');

create policy "Admins can upload gallery files"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'gallery' and public.is_admin());

create policy "Admins can update gallery files"
  on storage.objects for update to authenticated
  using (bucket_id = 'gallery' and public.is_admin())
  with check (bucket_id = 'gallery' and public.is_admin());

create policy "Admins can delete gallery files"
  on storage.objects for delete to authenticated
  using (bucket_id = 'gallery' and public.is_admin());

-- After creating the first admin in Supabase Auth, add the user's UUID:
-- insert into public.admin_users (user_id) values ('YOUR-AUTH-USER-UUID');
