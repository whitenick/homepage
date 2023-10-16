import { Auth } from "@supabase/auth-ui-react";
import { PageWrapper } from "../../../components/layout/page-wrapper"
import { useSupabaseClient } from "../../../components/supabase/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
    const client = useSupabaseClient();

    return (
        <PageWrapper>
            <div className="flex justify-center items-center h-full">
                <div className="border rounded shadow-sm p-6 justify-center">
                    <Auth supabaseClient={client} appearance={{ theme: ThemeSupa }} providers={['google']} />
                </div>
            </div>
        </PageWrapper>
    );
}

export default Login;