-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow authenticated users to upload CVs" ON storage.objects;
DROP POLICY IF EXISTS "Allow users to update their own CV uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow users to delete their own CV uploads" ON storage.objects;

-- Create more permissive policies for anonymous access
CREATE POLICY "Allow anyone to upload CVs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'cv-uploads');

CREATE POLICY "Allow anyone to update CV uploads" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'cv-uploads');

CREATE POLICY "Allow anyone to delete CV uploads" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'cv-uploads');