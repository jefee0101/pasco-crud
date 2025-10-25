import { createClient } from '@supabase/supabase-js'


const supabase_url = 'https://sgppbuplnzsufyelutsd.supabase.co';
const supabase_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNncHBidXBsbnpzdWZ5ZWx1dHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NjYyNjYsImV4cCI6MjA3NjM0MjI2Nn0.E8YkbdY76L_9jjNXcmTKy5QHNU5idedPD6XYXTzDM8o';

export const supabase = createClient(supabase_url, supabase_anon_key);