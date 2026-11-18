DROP POLICY "Anyone can request an inspection" ON public.inspection_bookings;
CREATE POLICY "Anyone can request a valid inspection"
ON public.inspection_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (
  property IN (
    'The Monolith Duplex, Lekki Phase 1, Lagos',
    'Obsidian Court Residence, Ikate Elegushi, Lagos',
    'Azure Pool Villa, Banana Island, Ikoyi',
    'Horizon View Penthouse, Old Ikoyi, Lagos',
    'Vision Terraces, Ajah, Lagos',
    'Vision Court Serviced Plots, Epe Corridor, Lagos'
  )
  AND inspection_date >= CURRENT_DATE
  AND EXTRACT(DOW FROM inspection_date) <> 0
  AND inspection_time IN ('9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM')
  AND char_length(btrim(full_name)) BETWEEN 1 AND 100
  AND char_length(btrim(phone)) BETWEEN 5 AND 30
  AND (notes IS NULL OR char_length(notes) <= 1000)
);