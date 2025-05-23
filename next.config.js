/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp'],
    unoptimized: process.env.NODE_ENV === 'production', // Needed for Cloudflare Pages
  },
  // Optimisation du chargement
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Cloudflare Pages configuration
  output: 'standalone',
  // Disable server-side telemetry in production
  trailingSlash: false,
};

module.exports = nextConfig;
