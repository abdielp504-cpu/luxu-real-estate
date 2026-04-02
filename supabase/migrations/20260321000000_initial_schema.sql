-- Enable Extensions
create extension if not exists "uuid-ossp";

-- Custom Types
do $$ 
begin 
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum ('buyer', 'agent', 'admin');
  end if;
  if not exists (select 1 from pg_type where typname = 'property_status') then
    create type public.property_status as enum ('available', 'sold', 'pending');
  end if;
end $$;

-- 1. Profiles Table (Linked to Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  avatar_url text,
  role public.user_role not null default 'buyer',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Properties Table
create table public.properties (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  price numeric not null,
  address text not null,
  city text not null,
  images text[] default '{}',
  amenities text[] default '{}',
  agent_id uuid references public.profiles(id) on delete set null,
  status public.property_status not null default 'available',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Inquiries Table
create table public.inquiries (
  id uuid default uuid_generate_v4() primary key,
  property_id uuid references public.properties(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete set null,
  name text,
  email text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.properties enable row level security;
alter table public.inquiries enable row level security;

-- RLS Policies - Profiles
create policy "Public profiles are viewable by everyone" 
  on public.profiles for select using (true);

create policy "Users can insert their own profile" 
  on public.profiles for insert with check (auth.uid() = id);

create policy "Users can update their own profile" 
  on public.profiles for update using (auth.uid() = id);

-- RLS Policies - Properties
create policy "Properties are viewable by everyone" 
  on public.properties for select using (true);

create policy "Agents can insert properties" 
  on public.properties for insert 
  with check (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() 
      and (role = 'agent' or role = 'admin')
    )
  );

create policy "Agents can update their own properties" 
  on public.properties for update 
  using (
    agent_id = auth.uid() 
    or exists (
      select 1 from public.profiles 
      where id = auth.uid() 
      and role = 'admin'
    )
  );

-- RLS Policies - Inquiries
create policy "Users can insert inquiries" 
  on public.inquiries for insert 
  with check (true);

create policy "Agents can view inquiries for their properties" 
  on public.inquiries for select 
  using (
    exists (
      select 1 from public.properties 
      where properties.id = inquiries.property_id 
      and properties.agent_id = auth.uid()
    )
    or auth.uid() = user_id
    or exists (
      select 1 from public.profiles 
      where id = auth.uid() 
      and role = 'admin'
    )
  );

-- Functions & Triggers for updated_at
create or replace function public.handle_updated_at()
returns trigger as $function$
begin
  new.updated_at = now();
  return new;
end;
$function$ language plpgsql;

create trigger on_profiles_updated
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger on_properties_updated
  before update on public.properties
  for each row execute procedure public.handle_updated_at();

-- Trigger for profile creation on auth.users insert
create or replace function public.handle_new_user()
returns trigger as $function$
begin
  insert into public.profiles (id, email, full_name, avatar_url, role)
  values (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'avatar_url',
    coalesce(new.raw_user_meta_data->>'role', 'buyer')::public.user_role
  );
  return new;
end;
$function$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
