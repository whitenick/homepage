import { Auth } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "../../../components/supabase/supabase";
import { useEffect, useState } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { PageWrapper } from "../../../components/layout/page-wrapper";
import { UserResponse } from "@supabase/supabase-js";
import StudentList from "../../../modules/behavior-buzz/pages/student-list";

const signIn = async (client) => {
    const { data, error } = await client.auth.signInWithOAuth({
        provider: 'google'
    });

    return { data, error };
}

const Page = () => {
    const client = useSupabaseClient();
    const[user, setUser] = useState<UserResponse | null>(null);
    client.auth.getUser().then((user) => { setUser(user); })
    console.log(user);

    return (
        <PageWrapper className="flex bg-inherit">
        {!!user?.data?.user?.email ? 
            <div className="border border-rounded shadown-sm p-6">
                <Auth supabaseClient={client} appearance={{ theme: ThemeSupa }} providers={['google']}  />
            </div> : 
            <StudentList />
        }
        </PageWrapper>
    )
}

export default Page;