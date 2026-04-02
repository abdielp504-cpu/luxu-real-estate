# Plan: Track 05 - Property Listings & Filtering

## Phase 1: Filter Logic & API Integration
- [ ] Create a `getProperties` service function with support for multiple filters (price, city, amenities, search).
- [ ] Implement Supabase query modifiers (`range`, `filter`, `textSearch`, etc.).
- [ ] Support URL-based filtering using `searchParams` for state management and shareable links.

## Phase 2: Filter UI Components
- [ ] Design a minimalist `PropertyFilters` component (sidebar or collapsible top bar).
- [ ] Use Shadcn UI `Slider` for price ranges and `Checkbox/Switch` for amenities.
- [ ] Build a `PropertySort` dropdown with luxury sorting options.

## Phase 3: Enhanced Listings Page
- [ ] Update `/properties/page.tsx` to handle dynamic filtering.
- [ ] Implement a loading state (Skeletons) for when filters are applied.
- [ ] Improve `PropertyGrid` and `PropertyCard` to support missing details (beds, baths, sqft) if they are added to the DB.

## Phase 4: Database Enhancements (Optional)
- [ ] Consider adding `beds`, `baths`, and `sqft` columns to the `properties` table for more comprehensive listings.
- [ ] Create a migration for these new fields if needed.

## Phase 5: Testing & Polish
- [ ] Test filtering with multiple simultaneous criteria.
- [ ] Verify search performance and accuracy.
- [ ] Ensure the UI remains responsive and elegant on mobile devices.
