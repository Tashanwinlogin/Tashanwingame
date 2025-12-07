/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Generates /sitemap.xml automatically if sitemap.js exists
  // Clean URLs like /about instead of /about.html
};

module.exports = nextConfig;