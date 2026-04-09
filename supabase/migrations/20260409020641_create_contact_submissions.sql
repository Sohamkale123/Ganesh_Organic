/*
  # Create Contact Submissions Table

  ## Overview
  Creates a table to store contact form submissions from the Ganesh Organic website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier
    - `name` (text) - Submitter's full name
    - `email` (text) - Submitter's email address
    - `phone` (text, nullable) - Submitter's phone number
    - `subject` (text) - Message subject
    - `message` (text) - Full message content
    - `created_at` (timestamptz) - Submission timestamp
    - `is_read` (boolean) - Whether admin has read the message

  ## Security
  - RLS enabled on `contact_submissions`
  - Public INSERT policy: Anyone can submit a contact form
  - Authenticated SELECT policy: Only authenticated users can view submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
