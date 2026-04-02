-- 4. Favorites Table
create table public.favorites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  property_id uuid references public.properties(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, property_id)
);

-- Enable RLS
alter table public.favorites enable row level security;

-- RLS Policies - Favorites
create policy "Users can view their own favorites" 
  on public.favorites for select 
  using (auth.uid() = user_id);

create policy "Users can insert their own favorites" 
  on public.favorites for insert 
  with check (auth.uid() = user_id);

create policy "Users can delete their own favorites" 
  on public.favorites for delete 
  using (auth.uid() = user_id);
