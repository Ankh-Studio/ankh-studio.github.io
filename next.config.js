/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ankh-studio.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ankh-studio.github.io' : '',
  trailingSlash: true,
}

module.exports = nextConfig
