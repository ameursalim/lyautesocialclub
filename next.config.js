/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp'],
    unoptimized: true, // Required for static export
  },
  // Optimisation du chargement
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Change to export for static site generation
  output: 'export',
  // Disable server-side telemetry in production
  trailingSlash: false,
  // No experimental features needed for static export
  experimental: {},
  // Not needed for static export
  // serverExternalPackages: ['mongoose']
};

module.exports = nextConfig;
