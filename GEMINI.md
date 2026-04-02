# Luxe Real Estate - Project Intelligence

## Project Context
**Luxe Real Estate** is a high-end real estate platform built with **Next.js 15**, **Shadcn UI**, and **Supabase**.

## Core Mandates
- **Design Philosophy:** Minimalist Luxury. High-quality imagery, elegant typography, and white space.
- **Tech Stack:** App Router, Tailwind CSS 4, TypeScript.
- **Data Layer:** Supabase for Auth, Database, and Storage.

## Directory Structure
- `src/app/`: Next.js Routing and Pages.
- `src/components/ui/`: Shadcn primitive components.
- `src/components/features/`: Domain-specific components (Properties, Agents).
- `src/lib/`: Core utilities and Supabase clients.
- `src/hooks/`: Reusable React hooks.
- `types/`: Global TypeScript definitions.
- `conductor/`: Project orchestration and tracks.
- `prd/`: Product Requirements Documents.

## Coding Standards
- Use Server Components by default.
- Strictly type all data models.
- Follow Shadcn UI "copy-paste" and customize logic.
