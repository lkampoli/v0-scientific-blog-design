/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  images: {
    unoptimized: true,
  },

  basePath: 'lkampoli.github.io/scientific-blog',
  assetPrefix: 'lkampoli.github.io/scientific-blog',

  trailingSlash: true,

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
