import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export const useSupabaseSession = () => {
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        supabase.auth.getSession().then((session) => {
            setSession(session.data);
        });
    }, [supabase.auth]);

    return session;
}

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl as string, supabaseKey as string);