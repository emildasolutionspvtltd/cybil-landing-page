
module.exports = {
  // 1 — make the whole app live under /landingpage
  basePath: '/landingpage',

  // 2 — let …/landingpage and …/landingpage/ both resolve
  trailingSlash: true,

  // 3 — static export for Netlify
  output: 'export',

  // 4 — disable Next‑image optimisation (needed for static export)
  images: { unoptimized: true },

  // 5 — skip ESLint during CI builds (optional)
  eslint: { ignoreDuringBuilds: true },
};
