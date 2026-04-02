# Plan: Track 09 - Optimization & SEO

## Phase 1: Core SEO & Dynamic Metadata
- [ ] Refactor root `layout.tsx` with comprehensive global metadata.
- [ ] Implement dynamic `generateMetadata` in `/properties/[id]/page.tsx`.
- [ ] Add `robots.txt` and a basic `sitemap.ts` dynamic generator.

## Phase 2: Social Sharing & Structured Data
- [ ] Configure OpenGraph and Twitter image previews using property assets.
- [ ] Implement JSON-LD (Schema.org/RealEstateListing) for the Property Detail page.
- [ ] Add canonical URLs to prevent duplicate content issues.

## Phase 3: Image & Performance Audit
- [ ] Audit all `Image` components for proper `sizes`, `priority`, and `quality` settings.
- [ ] Optimize the `Hero` section for Largest Contentful Paint (LCP).
- [ ] Implement a loading strategy for fonts to minimize layout shift (CLS).

## Phase 4: Caching & Static Optimization
- [ ] Implement `revalidate` intervals for property pages (ISR).
- [ ] Optimize Supabase queries to select only required fields (reduce payload).
- [ ] Setup `link` prefetching strategies for high-traffic paths.

## Phase 5: Testing & Production Readiness
- [ ] Run a full Lighthouse audit and address "Orange/Red" areas.
- [ ] Verify social previews using OG debuggers.
- [ ] Final accessibility check (contrast, focus states, alt text).
