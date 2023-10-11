import { Auth } from "@supabase/auth-ui-react";
import StudentList from "../../../modules/behavior-buzz/student-list";
import { useSupabaseClient } from "../../../components/supabase/supabase";
import { useEffect, useState } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { PageWrapper } from "../../../components/layout/page-wrapper";
import { UserResponse } from "@supabase/supabase-js";

const signIn = async (client) => {
    const { data, error } = await client.auth.signInWithOAuth({
        provider: 'google'
    });

    return { data, error };
}

const Page = () => {
    const client = useSupabaseClient();
    const [loginData, setLoginData] = useState(null);

    // const signIn = async (client) => {
    //     const { data, error } = await client.auth.signInWithOAuth({
    //         provider: 'google'
    //     });
    //     setLoginData(data);
    // }

    // signIn(client);

    // useEffect(() => {
    //     client.auth.initialize();
    // }, []);
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