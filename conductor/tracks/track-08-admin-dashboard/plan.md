# Plan: Track 08 - Admin & Agent Dashboard

## Phase 1: Access Control & Base Layout
- [ ] Implement role-based redirection in `middleware.ts` for `/dashboard`.
- [ ] Create `src/app/dashboard/layout.tsx` with a specialized navigation sidebar.
- [ ] Build a `DashboardNav` component including links to Stats, Properties, Inquiries, and Users.

## Phase 2: Property Management (Admin/Agent)
- [ ] Create `/dashboard/properties` with a `DataTable` listing all properties.
- [ ] Implement `/dashboard/properties/new` with a complex form for adding listings.
- [ ] Support for image URL management (and placeholder for future storage integration).
- [ ] Add `updateProperty` and `deleteProperty` server actions.

## Phase 3: Lead Management (Admin/Agent)
- [ ] Create `/dashboard/inquiries` listing all inquiries across the platform.
- [ ] Add filters for "My Properties" (for agents) vs "All Properties" (for admins).
- [ ] Implement a status update toggle (Unread, Contacted, Sold).

## Phase 4: User & Agent Management (Admin Only)
- [ ] Create `/dashboard/users` for administrative oversight.
- [ ] Implement role switching logic (Buyer <-> Agent).
- [ ] Add basic search and filter functionality for user roles.

## Phase 5: Stats & Final Polish
- [ ] Design a high-level `Overview` page with summary cards (Total Price, Avg Sqft, etc.).
- [ ] Test the CRUD flow for agents to ensure they can only edit their own listings.
- [ ] Ensure the dashboard is responsive and maintain the luxury brand's aesthetic.
