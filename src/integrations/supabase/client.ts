// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://euwrqgokxxjslpscjwjw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1d3JxZ29reHhqc2xwc2Nqd2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMzk3MTgsImV4cCI6MjA1MjkxNTcxOH0.Y-02cE-TSXuvZ7g28oOy51iIM8GTGnHyvPSoK0iwLwY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);