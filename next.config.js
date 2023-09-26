/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects () {
    return [
      {
        source: "/",
        destination: "/app",
        permanent: true
      }
    ]
  },
  async rewrites () {
    return [
      {
        source: "/",
        destination: "/app"
      }
    ]
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  }
}

module.exports = nextConfig