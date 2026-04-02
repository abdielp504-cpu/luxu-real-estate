# Plan: Track 04 - Authentication & Profiles

## Phase 1: Authentication API & Actions
- [ ] Create server actions for `login`, `signup`, and `logout` using `@supabase/ssr`.
- [ ] Implement middleware (or Next.js 15 proxy) for session refreshing.

## Phase 2: Auth UI Components
- [ ] Design a minimalist `LoginForm.tsx` and `SignupForm.tsx`.
- [ ] Build dedicated `/login` and `/signup` pages with high-end visuals.

## Phase 3: Profile System
- [ ] Create a `/profile` page to view and edit user data (full_name, avatar).
- [ ] Build a `UserNav` component for the header (showing user info/avatar).

## Phase 4: Protected Routes
- [ ] Implement access control for the profile page.
- [ ] Setup role-based redirection (Agents to a dashboard, Buyers to their profile).

## Phase 5: Testing & Polish
- [ ] Test the full auth flow (Sign up -> Confirm Email -> Login).
- [ ] Verify profile updates are correctly persisted in Supabase.
