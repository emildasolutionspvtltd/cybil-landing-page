
const nextConfig = {
  basePath: '/landingpage',
  assetPrefix: '/landingpage', 

  output: 'export',
  trailingSlash: true, 
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
