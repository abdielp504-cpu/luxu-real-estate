# Spec: Supabase Setup & Schema Design

## Objective
Establish the backend foundation for Luxe Real Estate by linking the project to Supabase, defining the initial database schema, and configuring authentication.

## Scope
- Link local project to a Supabase project.
- Define `properties`, `users`, and `inquiries` tables.
- Set up Row Level Security (RLS) policies.
- Generate TypeScript types from the database schema.

## Deliverables
- `supabase/` directory with migrations.
- Updated `types/index.ts` or a new `types/supabase.ts`.
- Configured `.env.local` with Supabase credentials.
