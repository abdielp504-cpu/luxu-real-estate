# Plan: Track 07 - Favorites & User Dashboard

## Phase 1: Database Setup
- [ ] Create `public.favorites` table with `user_id` and `property_id`.
- [ ] Enable RLS on `favorites` (Users can view/insert/delete their own).
- [ ] Add foreign key relationship to ensure data integrity.

## Phase 2: Favorites Logic
- [ ] Create server action `toggleFavorite` to add/remove a property from favorites.
- [ ] Implement a `FavoriteButton` client component with heart icon and animation.
- [ ] Integrate `FavoriteButton` into `PropertyCard` and `PropertyDetailPage`.

## Phase 3: Dashboard Layout & Navigation
- [ ] Redesign `/profile` to include a persistent sidebar or tab-based navigation.
- [ ] Create `/profile/favorites` to display the user's saved properties.
- [ ] Create `/profile/inquiries` to display the user's inquiry history.

## Phase 4: Inquiries Detail & Status
- [ ] Build a list view for inquiries with property preview and message.
- [ ] Add property metadata (image, title, price) to each inquiry entry.
- [ ] Show inquiry timestamp and potential status (if added later).

## Phase 5: Testing & Polish
- [ ] Test the toggle functionality across different pages.
- [ ] Verify that unauthenticated users are prompted to login when favoriting.
- [ ] Ensure the dashboard is fully responsive and matches the brand's aesthetic.
