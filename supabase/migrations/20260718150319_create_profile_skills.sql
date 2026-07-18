-- Create profile_skills relationship table
create table public.profile_skills (
  id uuid default gen_random_uuid() primary key,

  user_id uuid references public.profiles(id) on delete cascade not null,

  skill_id uuid references public.skills(id) on delete cascade not null,

  created_at timestamp with time zone default now(),

  unique(user_id, skill_id)
);


-- Enable Row Level Security
alter table public.profile_skills
enable row level security;


-- Everyone can view developer skills
create policy "Profile skills are publicly viewable."
on public.profile_skills
for select
using (true);


-- Users can add skills to their own profile
create policy "Users can add skills to their profile."
on public.profile_skills
for insert
with check (auth.uid() = user_id);


-- Users can remove skills from their own profile
create policy "Users can remove skills from their profile."
on public.profile_skills
for delete
using (auth.uid() = user_id);