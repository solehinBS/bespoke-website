-- Bespoke Mortgage Advisory website: loan calculator sign-in.
-- Run once in the WEBSITE's Supabase project (not the credit assessment project):
-- Supabase dashboard > SQL Editor > New query > paste all of this > Run.

-- Log of returning visitors who opened the full schedule by email only.
-- First-time visitors appear under Authentication > Users once they enter their code.
create table if not exists public.calculator_signins (
  id bigint generated always as identity primary key,
  email text not null,
  created_at timestamptz not null default now()
);
alter table public.calculator_signins enable row level security;
-- No policies on purpose: visitors cannot read or change this table directly.

-- Returns true if this email was verified with a code before, and logs the visit.
-- Gives back only true/false, never any other data about the user.
create or replace function public.calc_returning_signin(p_email text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  clean text := lower(trim(coalesce(p_email, '')));
  found boolean;
begin
  if length(clean) < 3 or length(clean) > 320 then
    return false;
  end if;
  select exists (
    select 1 from auth.users u
    where lower(u.email) = clean and u.email_confirmed_at is not null
  ) into found;
  if found then
    insert into public.calculator_signins (email) values (clean);
  end if;
  return found;
end;
$$;

revoke all on function public.calc_returning_signin(text) from public;
grant execute on function public.calc_returning_signin(text) to anon, authenticated;
