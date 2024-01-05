/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raipiot-official-website.oss-cn-beijing.aliyuncs.com',
        port: '',
        pathname: '/img/**'
      }
    ]
  }
}

module.exports = nextConfig
