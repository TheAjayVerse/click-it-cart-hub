
-- 1. Create cart_items table for each real product added by a user
create table public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  product_url text not null,
  name text,
  price text,
  image text,
  store text,
  variant jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Enable Row Level Security so each user sees only their own cart
alter table public.cart_items enable row level security;

-- 3. Policy: user can insert/select/update/delete their own cart items
create policy "User can access own cart items"
  on public.cart_items
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

