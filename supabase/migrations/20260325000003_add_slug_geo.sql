-- Enhance properties table for SEO and Geo
alter table public.properties 
add column if not exists slug text unique,
add column if not exists latitude numeric,
add column if not exists longitude numeric;

-- Index for slug lookups
create index if not exists idx_properties_slug on public.properties(slug);

-- Function to generate slugs from title if needed
create or replace function public.slugify(text) returns text as $$
begin
  return lower(regexp_replace(regexp_replace(replace($1, ' ', '-'), '[^a-zA-Z0-9-]', '', 'g'), '-+', '-', 'g'));
end;
$$ language plpgsql immutable;
