import './global.scss'

import { BrandConfig } from '@raipiot-infra/config'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import AsideWidget from '@/components/AsideWidget'
import { cn, getSrc } from '@/utils'

import ClientInit from './components/ClientInit'
import Footer from './components/Footer'
import Header from './components/Header'

const nunito = Nunito({ subsets: ['latin'], display: 'auto' })

export const metadata: Metadata = {
  generator: '',
  applicationName: BrandConfig.name,
  title: {
    template: `%s | ${BrandConfig.name}`,
    default: BrandConfig.name
  },
  description: '解密数据，赋能决策，制造业数字化转型综合服务商',
  openGraph: {
    title: BrandConfig.name,
    description: '解密数据，赋能决策，制造业数字化转型综合服务商',
    url: new URL(BrandConfig.url),
    images: [
      {
        url: getSrc('/img/logo/raipiot.png'),
        alt: BrandConfig.name
      }
    ],
    siteName: BrandConfig.name
  },
  keywords: [],
  authors: [
    {
      name: 'Bruce Song'
    }
  ],
  metadataBase: new URL(BrandConfig.url),
  creator: 'Bruce Song',
  publisher: 'Bruce Song'
}

export const viewport =
  'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(nunito.className, 'w-full overflow-x-hidden scroll-smooth relative')}>
        <Header />
        <div className="relative min-h-screen pt-20">{children}</div>
        <Footer />
        <ClientInit />
        <AsideWidget />
      </body>
    </html>
  )
}
