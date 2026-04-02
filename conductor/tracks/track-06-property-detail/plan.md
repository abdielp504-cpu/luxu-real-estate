# Plan: Track 06 - Property Detail & Inquiries

## Phase 1: Data Logic & Page Structure
- [ ] Create `/properties/[id]/page.tsx` as a server component.
- [ ] Fetch property data from Supabase including joined `profiles` for agent info.
- [ ] Implement a 404/Not Found state for non-existent IDs.

## Phase 2: Immersive UI Components
- [ ] Build a `PropertyGallery` component with a high-end masonry or carousel feel.
- [ ] Design a `PropertySpecs` component for beds, baths, sqft, and type.
- [ ] Create a `PropertyFeatures` grid for the `amenities` array.

## Phase 3: Inquiry & Lead System
- [ ] Design a minimalist `InquiryForm` component.
- [ ] Create a server action `submitInquiry` to store leads in the `inquiries` table.
- [ ] Add success/error feedback for lead submissions.

## Phase 4: Enhancements & Context
- [ ] Implement a `SimilarProperties` section based on city or property type.
- [ ] Add a sticky "Contact Agent" CTA on mobile/tablet.
- [ ] Design an agent info card within the property page.

## Phase 5: Testing & Polish
- [ ] Test the inquiry submission flow with real database entries.
- [ ] Ensure image responsiveness across all devices.
- [ ] Verify that RLS policies allow correct access for inquiries.
