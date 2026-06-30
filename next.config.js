/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/v2",
                destination: "/",
                permanent: true,
            },
            {
                source: "/v2/:path*",
                destination: "/:path*",
                permanent: true,
            },
        ];
    },
    // Redirects removed - Santa Fe homepage now at root
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
};

module.exports = nextConfig;
