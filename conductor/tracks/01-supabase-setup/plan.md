# Plan: Supabase Setup & Schema Design

## Step 1: Initialize Supabase
1. Run `npx supabase init`.
2. Link to the remote project using `npx supabase link --project-ref <project-id>`. (Will ask user for project ID).

## Step 2: Database Schema (Migrations)
1. Create a new migration file: `npx supabase migration new initial_schema`.
2. Define tables in SQL:
    - `profiles`: extends auth.users.
    - `properties`: main listing data.
    - `inquiries`: contact requests.
3. Apply migration: `npx supabase db push`.

## Step 3: Type Generation
1. Generate types: `npx supabase gen types typescript --linked > types/supabase.ts`.

## Step 4: Environment Variables
1. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Verification
- Confirm tables exist in the Supabase dashboard.
- Verify types are correctly generated and usable in the frontend.
