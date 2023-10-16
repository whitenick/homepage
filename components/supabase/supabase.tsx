import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export const useSupabaseSession = () => {
    const [session, setSession] = useState<any>(null);
    let client = useSupabaseClient();

    useEffect(() => {
        client.auth.getSession().then((session) => {
            setSession(session.data);
        });
    }, [client.auth]);

    return session;
}

export const useSupabaseClient = () => {
    let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    return createClient(supabaseUrl as string, supabaseKey as string);
};