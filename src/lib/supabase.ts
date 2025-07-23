import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Log per debugging
console.log('Environment check:', {
  supabaseUrl: supabaseUrl ? 'Found' : 'Missing',
  supabaseAnonKey: supabaseAnonKey ? 'Found' : 'Missing',
  allEnvVars: Object.keys(import.meta.env)
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials:', { supabaseUrl, supabaseAnonKey });
  throw new Error(`Missing Supabase environment variables: URL=${!supabaseUrl ? 'MISSING' : 'OK'}, KEY=${!supabaseAnonKey ? 'MISSING' : 'OK'}`);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)