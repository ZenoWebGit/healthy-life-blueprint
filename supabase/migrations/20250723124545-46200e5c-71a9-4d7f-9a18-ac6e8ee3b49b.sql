-- Create a public storage bucket for CV uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('cv-uploads', 'cv-uploads', true);

-- Create policies for the cv-uploads bucket
CREATE POLICY "Allow public read access to CV uploads" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'cv-uploads');

CREATE POLICY "Allow authenticated users to upload CVs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'cv-uploads');

CREATE POLICY "Allow users to update their own CV uploads" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'cv-uploads');

CREATE POLICY "Allow users to delete their own CV uploads" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'cv-uploads');