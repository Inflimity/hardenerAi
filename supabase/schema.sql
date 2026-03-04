-- Hardener Plus Supabase Initialization Script
-- Run this completely in the Supabase SQL Editor to set up your database schema,
-- triggers, and Row Level Security (RLS) policies.

-- 1. Create the `profiles` table to extend the internal Supabase Auth `users` table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users (id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    email TEXT,
    plan TEXT DEFAULT 'Free' CHECK (
        plan IN ('Free', 'Pro', 'Enterprise')
    ),
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW()
);

-- Turn on Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own profile
CREATE POLICY "Users can view their own profile" ON public.profiles FOR
SELECT USING (auth.uid () = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update their own profile" ON public.profiles FOR
UPDATE USING (auth.uid () = id);

-- 2. Create the `scans` table for Hardener Plus vulnerability scanning history
CREATE TABLE public.scans (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    user_id UUID REFERENCES public.profiles (id) ON DELETE CASCADE NOT NULL,
    target_url TEXT NOT NULL,
    status TEXT DEFAULT 'Running' CHECK (
        status IN (
            'Running',
            'Completed',
            'Failed'
        )
    ),
    progress INTEGER DEFAULT 0,
    vulns_found INTEGER DEFAULT 0,
    time_taken TEXT,
    error_message TEXT,
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW()
);

-- Turn on Row Level Security
ALTER TABLE public.scans ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own scans
CREATE POLICY "Users can view their own scans" ON public.scans FOR
SELECT USING (auth.uid () = user_id);

-- Policy: Users can insert their own scans
CREATE POLICY "Users can insert their own scans" ON public.scans FOR
INSERT
WITH
    CHECK (auth.uid () = user_id);

-- 3. Automatic Profile Creation Trigger
-- This ensures that whenever someone signs up via Supabase Auth,
-- a `profile` is automatically generated for them bridging the auth system to our public schema.

CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id, 
    NEW.raw_user_meta_data->>'full_name', 
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 4. Admin Access Bypass
-- Supabase uses a concept called the Supabase Service Role Key to bypass RLS entirely.
-- The Next.js Admin Dashboard backend will use this key when fetching records for the `/admin` routes.
-- Therefore, we do not need to write complex SQL RLS policies for Admins to view all profiles
-- (it is handled safely on the server).