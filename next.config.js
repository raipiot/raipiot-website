/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p1.itc.cn',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'www.iso9001-sz.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
