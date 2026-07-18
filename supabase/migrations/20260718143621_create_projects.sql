-- Create projects table
create table public.projects (
  id uuid default gen_random_uuid() primary key,

  user_id uuid references auth.users(id) on delete cascade not null,

  title text not null,
  description text,

  image_url text,

  github_url text,
  live_url text,

  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);


-- Enable Row Level Security
alter table public.projects
enable row level security;


-- Anyone can view projects
create policy "Projects are publicly viewable."
on public.projects
for select
using (true);


-- Users can create their own projects
create policy "Users can create their own projects."
on public.projects
for insert
with check (auth.uid() = user_id);


-- Users can update their own projects
create policy "Users can update their own projects."
on public.projects
for update
using (auth.uid() = user_id);


-- Users can delete their own projects
create policy "Users can delete their own projects."
on public.projects
for delete
using (auth.uid() = user_id);