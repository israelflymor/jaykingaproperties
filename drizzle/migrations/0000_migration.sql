CREATE TABLE public.inspection_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property text NOT NULL CHECK (char_length(property) BETWEEN 1 AND 200),
  inspection_date date NOT NULL,
  inspection_time text NOT NULL CHECK (char_length(inspection_time) BETWEEN 1 AND 20),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 30),
  notes text CHECK (notes IS NULL OR char_length(notes) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.inspection_bookings TO anon, authenticated;
GRANT ALL ON public.inspection_bookings TO service_role;
ALTER TABLE public.inspection_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request an inspection" ON public.inspection_bookings
  FOR INSERT TO anon, authenticated WITH CHECK (true);