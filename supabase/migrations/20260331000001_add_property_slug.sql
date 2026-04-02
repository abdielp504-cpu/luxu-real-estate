-- Add slug column to properties
alter table public.properties 
add column if not exists slug text unique;

-- Generate temporary slugs for existing records to avoid null constraint issues later
update public.properties 
set slug = lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || substr(id::text, 1, 8)
where slug is null;

-- Now that we have data, we can make it not null if desired
-- alter table public.properties alter column slug set not null;

-- Add index for faster lookups by slug
create index if not exists idx_properties_slug on public.properties(slug);
