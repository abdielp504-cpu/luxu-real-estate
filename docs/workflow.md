# Project Workflow - Luxe Real Estate

This document outlines the development lifecycle and standards for this project.

## 1. Development Lifecycle
1. **Design & Planning:** Define requirements in PRD and UI/UX in Figma (if available).
2. **Database Schema:** Model tables in Supabase and sync with local migrations.
3. **Frontend Implementation:**
    - Build UI components using Shadcn UI.
    - Create page layouts and routes using Next.js App Router.
    - Integrate Supabase for data fetching and authentication.
4. **Testing:** Unit tests for components and E2E tests for critical flows.
5. **Deployment:** Continuous Integration/Deployment (CI/CD) via Vercel.

## 2. Coding Standards
- **Naming:** CamelCase for components (`PropertyCard.tsx`), kebab-case for files (`property-card.tsx`).
- **Types:** Strictly type all props and data models using TypeScript.
- **Components:** Favor functional components and React Hooks.
- **Shadcn UI:** Follow the "copy and paste" philosophy; customize in `src/components/ui`.

## 3. Supabase Integration
- Use `supabase-js` for client-side and server-side operations.
- Maintain migrations in `supabase/migrations`.
- Generate types using `supabase gen types --linked`.

## 4. Git Workflow
- Feature branches (`feat/feature-name`).
- Bug fix branches (`fix/bug-name`).
- Pull Requests with descriptive titles and summaries.
