/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing',
  assetPrefix: '/landing',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
