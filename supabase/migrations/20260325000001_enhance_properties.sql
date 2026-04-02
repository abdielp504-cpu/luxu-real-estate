-- Add new columns to properties table
alter table public.properties 
add column if not exists type text check (type in ('house', 'apartment', 'villa', 'penthouse')) default 'house',
add column if not exists beds integer default 0,
add column if not exists baths integer default 0,
add column if not exists sqft integer default 0;

-- Update sample data if exists
update public.properties set 
  type = 'villa', beds = 5, baths = 4, sqft = 4500 
where title = 'The Glass House';

update public.properties set 
  type = 'house', beds = 4, baths = 3, sqft = 3200 
where title = 'Modern Oasis';

update public.properties set 
  type = 'house', beds = 3, baths = 2, sqft = 2100 
where title = 'Nordic Retreat';
