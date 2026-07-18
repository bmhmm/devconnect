-- Expand profiles table for DevConnect developer identity

alter table public.profiles
add column if not exists headline text,
add column if not exists bio text,
add column if not exists location text,
add column if not exists company text,
add column if not exists github_url text,
add column if not exists linkedin_url text,
add column if not exists portfolio_url text,
add column if not exists available_for_work boolean default false,
add column if not exists created_at timestamptz default now();