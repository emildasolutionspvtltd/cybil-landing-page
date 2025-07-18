/**  next.config.js 
module.exports = {
  //  ⬇️  tells Next to build everything under /landingpage
  basePath: '/landingpage',
  assetPrefix: '/landingpage',

  // keep these if you already have them
  output: 'export',          // required for static hosting on Netlify
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
}; **/

/** next.config.js (hard-coded) */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/landingpage',
  assetPrefix: '/landingpage',
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

