/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp'],
    unoptimized: true, // Required for Cloudflare Pages
  },
  // Optimisation du chargement
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Cloudflare Pages configuration
  output: 'standalone',
  // Disable server-side telemetry in production
  trailingSlash: false,
  // Essential for Cloudflare Pages to handle Next.js correctly
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  }
};

module.exports = nextConfig;
