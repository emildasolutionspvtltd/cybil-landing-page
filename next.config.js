/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  base: '/landing/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
