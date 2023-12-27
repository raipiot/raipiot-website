/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.hand-china.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.rootcloud.com',
        port: '',
        pathname: '/**'
      },
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
