import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Lock } from 'lucide-react';
import Head from 'next/head';

const Login = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      const next = (router.query.next as string) || '/app/recruiting';
      router.push(next);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In — Nick White</title>
      </Head>
      <div className="desert-pattern flex min-h-screen w-full items-center justify-center p-6">
        <div className="w-full max-w-sm flex flex-col gap-6">

          {/* Logo */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lock className="h-6 w-6" style={{ color: '#C8553D' }} />
              <h1 className="text-2xl font-semibold tracking-tight" style={{ color: '#C8553D' }}>
                Nick White
              </h1>
            </div>
            <p className="text-sm" style={{ color: 'hsl(12 5% 45%)' }}>Private area — sign in to continue</p>
          </div>

          {/* Card */}
          <Card className="overflow-hidden shadow-lg" style={{ borderColor: '#E8D9C5' }}>
            <div className="h-1.5" style={{ backgroundColor: '#C8553D' }} />
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl font-medium">Welcome back</CardTitle>
              <CardDescription>Enter your credentials to access this page</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      disabled={isLoading}
                      style={{ borderColor: '#E8D9C5' }}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      disabled={isLoading}
                      style={{ borderColor: '#E8D9C5' }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white transition-opacity hover:opacity-90"
                    disabled={isLoading}
                    style={{ backgroundColor: '#C8553D' }}
                  >
                    {isLoading ? 'Signing in…' : 'Sign in'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};

export default Login;
