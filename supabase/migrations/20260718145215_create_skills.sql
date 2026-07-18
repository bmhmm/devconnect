-- Create skills table
create table public.skills (
  id uuid default gen_random_uuid() primary key,

  name text unique not null,

  created_at timestamp with time zone default now()
);


-- Enable Row Level Security
alter table public.skills
enable row level security;


-- Everyone can view skills
create policy "Skills are publicly viewable."
on public.skills
for select
using (true);


-- Only authenticated users can create skills
create policy "Authenticated users can create skills."
on public.skills
for insert
with check (auth.uid() is not null);