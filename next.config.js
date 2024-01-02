/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: '',
      //   port: '',
      //   pathname: '/**'
      // }
    ]
  }
}

module.exports = nextConfig
