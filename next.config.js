/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: basePath,
  basePath,
  trailingSlash: true,
}

module.exports = nextConfig
