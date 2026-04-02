# Architecture - Luxe Real Estate

## Overview
Luxe Real Estate follows a modern full-stack architecture using Next.js as the frontend/orchestration layer and Supabase as the backend service layer.

## Component Architecture
- **UI Components:** Atomic design approach using Shadcn UI. Located in `src/components/ui`.
- **Feature Components:** Domain-specific components (e.g., `PropertyCard`, `AgentProfile`). Located in `src/components/features`.
- **Layouts:** Shared layouts for different sections (Admin, Public, Auth).

## Data Flow
1. **Server Components:** Fetch data directly from Supabase using `server-side` client for initial rendering and SEO.
2. **Client Components:** Use TanStack Query or direct Supabase client calls for interactive features and real-time updates.
3. **Mutations:** Performed via Server Actions for better security and progressive enhancement.

## Directory Structure
- `src/app/`: Next.js App Router (Pages, Layouts, API Routes).
- `src/components/`: Reusable React components.
- `src/lib/`: Shared utilities and Supabase client configuration.
- `src/hooks/`: Custom React hooks for data fetching and logic.
- `types/`: Global TypeScript definitions.
- `prd/`: Product Requirements Documents.
- `conductor/`: Project orchestration and tracking.
