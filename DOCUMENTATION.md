# Luxe Real Estate | Production Documentation

## Project Overview
Luxe Real Estate is a high-end property platform built with Next.js 15, Tailwind CSS 4, and Supabase. It features a minimalist luxury aesthetic and production-grade performance.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4 + Shadcn/UI
- **Database & Auth:** Supabase
- **Deployment:** Vercel
- **SEO:** Metadata API + Dynamic Sitemaps

## Deployment Guide

### 1. Supabase Configuration
Ensure your Supabase project has the latest schema by applying the migrations in `/supabase/migrations`.
- **Auth Redirects:** In the Supabase Dashboard (Authentication > URL Configuration), add your production domain:
    - Site URL: `https://your-domain.vercel.app`
    - Redirect URIs: `https://your-domain.vercel.app/**`

### 2. Vercel Environment Variables
Add the following keys to your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anonymous API Key.

## Agent & Admin Management

### Role Management
Roles are stored in `public.profiles`. To elevate a user to an Agent or Admin:
1. Go to the Supabase SQL Editor.
2. Run: `update public.profiles set role = 'agent' where email = 'user@example.com';`

### Property Management
- Access the portal at `/admin`.
- **Dashboard:** View real-time stats.
- **Listings:** CRUD operations for properties. Multi-image support is currently via direct URL input.
- **Leads:** View and track all client inquiries.

## Performance Optimization
- **Images:** Always use `next/image` with proper `sizes` and `alt` text.
- **Caching:** Property detail pages use ISR (revalidate every 3600s).
- **Sitemap:** Automatically generated at `/sitemap.xml`.

## Maintenance
- **Build:** `npm run build`
- **Development:** `npm run dev`
- **Linting:** `npm run lint`
