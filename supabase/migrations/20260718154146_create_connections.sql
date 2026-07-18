-- Create connections table
create table public.connections (
  id uuid default gen_random_uuid() primary key,

  requester_id uuid references public.profiles(id) on delete cascade not null,

  receiver_id uuid references public.profiles(id) on delete cascade not null,

  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'rejected')),

  created_at timestamptz default now(),

  unique(requester_id, receiver_id),

  check (requester_id <> receiver_id)
);

-- Enable Row Level Security
alter table public.connections
enable row level security;

-- Users can view connections involving them
create policy "Users can view their connections"
on public.connections
for select
using (
  auth.uid() = requester_id
  or
  auth.uid() = receiver_id
);

-- Users can create connection requests
create policy "Users can create connection requests"
on public.connections
for insert
with check (
  auth.uid() = requester_id
);

-- Users can update requests they are involved in
create policy "Users can update their connections"
on public.connections
for update
using (
  auth.uid() = requester_id
  or
  auth.uid() = receiver_id
);

-- Users can delete their own connections
create policy "Users can delete their connections"
on public.connections
for delete
using (
  auth.uid() = requester_id
  or
  auth.uid() = receiver_id
);