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
  }
}

module.exports = nextConfig
// images.unoptimized = true

