import './global.scss'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { cn } from '@/utils'

import ClientInit from './components/ClientInit'
import Footer from './components/Footer'
import Header from './components/Header'

const montserrat = Montserrat({ subsets: ['latin'], display: 'auto' })

const { AppConfig } = await import('@/constants')

export const metadata: Metadata = {
  generator: '',
  applicationName: AppConfig.appName,
  title: {
    template: `%s | ${AppConfig.appName}`,
    default: AppConfig.appName
  },
  description: '',
  keywords: [],
  authors: [
    {
      name: 'Bruce Song'
    }
  ],
  creator: 'Bruce Song',
  publisher: 'Bruce Song'
}

export const viewport =
  'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, 'w-full overflow-x-hidden scroll-smooth relative')}>
        <Header />
        <div className="relative min-h-screen">{children}</div>
        <Footer />
        <ClientInit />
      </body>
    </html>
  )
}
