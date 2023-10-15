import { createClient } from '@supabase/supabase-js';

export const useSupabaseClient = () => {
    let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    return createClient(supabaseUrl as string, supabaseKey as string);
};