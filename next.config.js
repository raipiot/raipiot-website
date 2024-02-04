const AutoImport = require('unplugin-auto-import/webpack').default
const { nextPresets } = require('@raipiot-infra/auto-import')

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raipiot-official-website.oss-cn-beijing.aliyuncs.com',
        port: '',
        pathname: '/img/**'
      }
    ]
  },
  webpack: (config) => {
    config.plugins.push(
      AutoImport({
        imports: [...nextPresets],
        dts: '@types/auto-imports.d.ts'
      })
    )
    return config
  }
}
