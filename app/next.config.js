/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com', 'images.alphacoders.com']
  }
}

module.exports = nextConfig
