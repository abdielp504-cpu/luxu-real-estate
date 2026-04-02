-- Cleanup and finalize property type system
DO $$ 
BEGIN
    -- 1. Ensure the enum exists with all required types
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'property_type') THEN
        CREATE TYPE public.property_type AS ENUM ('house', 'apartment', 'villa', 'penthouse', 'mansion', 'townhouse', 'loft');
    ELSE
        -- Add missing values to existing enum if they don't exist
        -- Note: ALTER TYPE ... ADD VALUE cannot run inside a transaction block in some PG versions, 
        -- but Supabase migrations handle this.
        BEGIN
            ALTER TYPE public.property_type ADD VALUE IF NOT EXISTS 'mansion';
            ALTER TYPE public.property_type ADD VALUE IF NOT EXISTS 'townhouse';
            ALTER TYPE public.property_type ADD VALUE IF NOT EXISTS 'loft';
        EXCEPTION WHEN duplicate_object THEN
            -- Ignore if already exists
        END;
    END IF;
END $$;

-- 2. Remove the old check constraint if it exists
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
    SELECT conname INTO constraint_name
    FROM pg_constraint 
    WHERE conrelid = 'public.properties'::regclass AND contype = 'c' AND conname = 'properties_type_check';
    
    IF constraint_name IS NOT NULL THEN
        EXECUTE 'ALTER TABLE public.properties DROP CONSTRAINT ' || constraint_name;
    END IF;
END $$;

-- 3. Ensure columns exist with correct types
-- First, drop the default to avoid cast issues during type change
ALTER TABLE public.properties ALTER COLUMN type DROP DEFAULT;

ALTER TABLE public.properties 
  ALTER COLUMN type TYPE public.property_type USING type::public.property_type,
  ALTER COLUMN type SET DEFAULT 'house',
  ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS latitude NUMERIC,
  ADD COLUMN IF NOT EXISTS longitude NUMERIC,
  ADD COLUMN IF NOT EXISTS beds INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS baths INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS sqft INTEGER DEFAULT 0;

-- 4. Create index for slug if not exists
CREATE INDEX IF NOT EXISTS idx_properties_slug ON public.properties(slug);
