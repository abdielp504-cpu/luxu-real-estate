-- 1. Create Property Type Enum
do $$ 
begin 
  if not exists (select 1 from pg_type where typname = 'property_type') then
    create type public.property_type as enum ('house', 'apartment', 'villa', 'penthouse', 'mansion', 'townhouse');
  end if;
end $$;

-- 2. Add columns to properties table
alter table public.properties 
add column if not exists type public.property_type not null default 'house',
add column if not exists city text not null default 'Miami';

-- 3. Update RLS policies if necessary (they are already covered by general policies)
-- But we can add an index for performance since we'll filter by these columns
create index if not exists idx_properties_type on public.properties(type);
create index if not exists idx_properties_city on public.properties(city);
