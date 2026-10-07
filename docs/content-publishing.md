# Content publishing architecture

The public Sparky Griswold site is **not a runtime Supabase application**.

Supabase is the CMS/source of truth for managed Gallery and Events content. When content is published:

1. The publish workflow reads published records from Supabase.
2. Gallery images are copied from Supabase Storage into `public/content/gallery`.
3. Gallery and Event records are written into generated TypeScript snapshots.
4. The generated content is committed to GitHub.
5. The normal site build/deployment runs from that commit.
6. Visitors receive the deployed Next.js site and do not query Supabase.

## Secrets

Add these as GitHub Actions repository secrets:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

The service-role key must never be committed to the repository or exposed to browser code.

## Publishing

The current workflow is:

**GitHub → Actions → Publish Content → Run workflow**

This gives us a safe manual publishing path while the admin interface is being built.

The eventual `/admin` dashboard will manage Gallery and Events in Supabase and can trigger the same publish workflow after an administrator presses **Publish**.

## Runtime independence

After deployment, Supabase can be unavailable without taking down the public website. The deployed site contains its own content snapshot and image files.

The repository currently retains the recovered archive as the fallback snapshot. The publish workflow will replace that snapshot with locally deployed assets once the Supabase CMS is populated.
