
const nextConfig = {
  // Serve everything under https://www.cybilsolutions.com/landingpage
  basePath: '/landingpage',
  assetPrefix: '/landingpage',

  // Let both “…/landingpage” and “…/landingpage/” resolve
  trailingSlash: true,

  // Static export for Netlify
  output: 'export',

  // Disable Next‑image optimisation (required for static export)
  images: { unoptimized: true },

  // Skip ESLint during the Netlify build
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
