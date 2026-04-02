# Track 08: Admin & Agent Management Dashboard

## Goal
Provide agents and administrators with a powerful, high-end interface to manage the platform's core assets: properties, inquiries, and user profiles. The dashboard must maintain the "Minimalist Luxury" aesthetic while offering dense data management capabilities.

## Features
- **Role-Based Access:** Restricted access to `/dashboard` for 'agent' and 'admin' roles.
- **Property Management (CRUD):** 
    - List all properties with status indicators.
    - Create new listings with multi-image support.
    - Edit and delete existing properties.
- **Lead Management:**
    - Centralized view of all incoming inquiries.
    - Filter inquiries by property or date.
    - Mark inquiries as "Contacted" or "Resolved".
- **Analytics Overview:**
    - High-level stats: Total properties, active leads, and most viewed areas (placeholder).
- **User Management (Admin Only):**
    - View and manage user roles (elevate buyers to agents).

## Design Standards
- **Data Density:** Use clean tables (Shadcn `DataTable`) with generous whitespace.
- **Visual Cues:** Subtle badges for property status (Available, Sold, Pending).
- **Forms:** Sophisticated multi-step or tabbed forms for adding complex property data.
- **Navigation:** A specialized sidebar distinct from the user profile but sharing the same design DNA.
