/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/landingpage',
  assetPrefix: '/landingpage',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
