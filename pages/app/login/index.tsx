import { Auth } from "@supabase/auth-ui-react";
import { PageWrapper } from "../../../components/layout/page-wrapper"
import { supabase } from "../../../components/supabase/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {

    return (
        <PageWrapper>
            <div className="flex justify-center items-center h-full">
                <div className="border rounded shadow-sm p-6 justify-center">
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']} />
                </div>
            </div>
        </PageWrapper>
    );
}

export default Login;