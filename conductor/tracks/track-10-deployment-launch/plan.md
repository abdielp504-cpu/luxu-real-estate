# Plan: Track 10 - Deployment & Launch

## Phase 1: Build Verification & Cleanup
- [ ] Run `npm run build` locally to identify and fix any production build errors.
- [ ] Perform a code cleanup (remove `console.logs`, temporary comments, and unused imports).
- [ ] Ensure all API routes and Server Actions have proper error handling for production.

## Phase 2: Supabase Production Setup
- [ ] Review and apply all SQL migrations to the production Supabase instance.
- [ ] Verify RLS (Row Level Security) policies are active and restrictive.
- [ ] Configure Auth Settings: Update "Site URL" and "Redirect URIs" to match the Vercel domain.

## Phase 3: Vercel Deployment
- [ ] Set up the project on Vercel (link repository).
- [ ] Configure Environment Variables in Vercel:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Trigger the first production deployment and monitor logs.

## Phase 4: Production UX Polish
- [ ] Create a custom `not-found.tsx` page with luxury branding.
- [ ] Create a custom `error.tsx` global error boundary.
- [ ] Verify that the `sitemap.xml` and `robots.txt` are correctly served on the production domain.

## Phase 5: Launch Verification & Handover
- [ ] Perform a full end-to-end test on the production site.
- [ ] Verify social media previews (OG Tags) using external debuggers.
- [ ] Update documentation with instructions for ongoing maintenance and agent role management.
