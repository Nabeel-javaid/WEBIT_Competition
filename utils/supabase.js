import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://uxyunknjydijxakiexzw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4eXVua25qeWRpanhha2lleHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NDE5ODgsImV4cCI6MTk5MjAxNzk4OH0.9Vz-cx5XQmjNcBVuIk3kQ8xObosHYo8yOG0Je7C-kyM'

export const supabase = createClient(supabaseUrl, supabaseKey)
