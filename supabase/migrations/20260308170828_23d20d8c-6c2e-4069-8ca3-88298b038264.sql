-- Create storage bucket for showcase images
INSERT INTO storage.buckets (id, name, public)
VALUES ('showcase-images', 'showcase-images', true);

-- Allow public read access
CREATE POLICY "Showcase images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'showcase-images');

-- Allow anyone to upload showcase images
CREATE POLICY "Anyone can upload showcase images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'showcase-images');

-- Create showcase submissions table
CREATE TABLE public.showcase_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  founder_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  description TEXT NOT NULL,
  website_url TEXT,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.showcase_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can insert
CREATE POLICY "Anyone can submit showcase"
ON public.showcase_submissions FOR INSERT
WITH CHECK (true);

-- Only approved ones are publicly readable
CREATE POLICY "Approved showcases are public"
ON public.showcase_submissions FOR SELECT
USING (status = 'approved');