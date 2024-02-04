import { BrandConfig } from '@raipiot-infra/config'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getSrc } from '@/utils'

function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col space-y-8 bg-[#1E222D] px-4 py-8 text-xs text-white sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0 sm:px-8 sm:text-sm">
        <div className="mt-2 flex select-none flex-col items-center space-y-2 self-center sm:mb-4 sm:mt-0 sm:pe-6">
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Image
              src={getSrc('/img/logo/raipiot_dark.png')}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-28"
            />
          </Link>
        </div>

        <div className="space-y-2.5 sm:py-2">
          <div className="flex items-center justify-center space-x-2 text-lg sm:justify-start">
            <div>{BrandConfig.fullName}</div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPinIcon size={16} />
            <span>苏州市工业园区金鸡湖大道88号人工智能产业园G1-404</span>
          </div>
          <div className="flex items-center space-x-1">
            <PhoneIcon size={16} />
            <span>0512 - 66307608</span>
          </div>
          <div className="flex items-center space-x-1">
            <MailIcon size={16} />
            <Link
              className="cursor-pointer underline-offset-4 transition-all hover:underline active:opacity-80"
              href={BrandConfig.getMailTo()}
              target="_blank"
            >
              {BrandConfig.email}
            </Link>
          </div>
        </div>

        <div className="space-y-2.5 sm:py-2">
          <div className="ml-2 flex items-center justify-center space-x-2 text-lg sm:ml-0 sm:justify-start">
            <span>睿朴麟信息科技（西安）有限公司</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPinIcon size={16} />
            <span>陕西省西安市高新区唐延路11号禾盛京广中心E座28层2804室</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center sm:ps-4">
          <Image
            src={getSrc('/img/qrcode.png')}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-32"
          />
          <span>公众号</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2 bg-[#111111] pb-6 pt-2 text-xs tracking-wider text-white sm:py-4 sm:text-sm">
        <span className="hidden sm:inline">
          Copyright &copy; {new Date().getFullYear()} · raipiot · {BrandConfig.fullName}版权所有
        </span>

        <div className="flex flex-col items-center space-y-2 sm:hidden">
          <span>
            Copyright &copy; {new Date().getFullYear()} · {BrandConfig.name}
          </span>
          <span>{BrandConfig.fullName}版权所有</span>
        </div>

        <div className="flex flex-col items-center space-x-0 space-y-2 text-xs sm:flex-row sm:space-x-10 sm:space-y-0">
          <Link
            className="flex cursor-pointer items-center transition-all active:opacity-80"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002004220"
            target="_blank"
          >
            <Image
              className="me-1.5 inline w-4 select-none"
              src={getSrc('/img/police.png')}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <span className="underline-offset-4 hover:underline">苏公网安备 32059002004220 号</span>
          </Link>
          <Link
            className="cursor-pointer underline-offset-4 transition-all hover:underline active:opacity-80"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
          >
            苏 ICP 备 2022030495 号 - 3
          </Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer
