import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col space-y-8 bg-[#1E222D] px-4 py-8 text-sm text-white sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0 sm:px-8">
        <div className="mt-2 flex select-none flex-col items-center space-y-2 self-center sm:mb-4 sm:mt-0 sm:pe-6">
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Image
              src="/img/logo/raipiot_dark.png"
              alt=""
              width="90"
              height="50"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </div>

        <div className="space-y-2.5 sm:py-2">
          <div className="flex items-center space-x-2 text-lg">
            <span>苏州睿朴麟信息科技有限公司</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPinIcon size={16} />
            <span>苏州市工业园区金鸡湖大道 88 号人工智能产业园 G1-404</span>
          </div>
          <div className="flex items-center space-x-1">
            <PhoneIcon size={16} />
            <span>0512 - 66307608</span>
          </div>
          <div className="flex items-center space-x-1">
            <MailIcon size={16} />
            <Link
              className="cursor-pointer underline-offset-4 transition-all hover:underline active:opacity-80"
              href="mailto:us@raipiot.com"
              target="_blank"
            >
              us@raipiot.com
            </Link>
          </div>
        </div>

        <div className="space-y-2.5 sm:py-2">
          <div className="flex items-center space-x-2 text-lg">
            <span>睿朴麟信息科技（西安）有限公司 </span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPinIcon size={16} />
            <span>陕西省西安市高新区唐延路 11 号禾盛京广中心 E 座 27 层 2702 室</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center sm:ps-4">
          <Image
            src="/img/qrcode.png"
            alt=""
            width={100}
            height={100}
          />
          <span>公众号</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-3 bg-[#111111] pb-6 pt-2 text-xs tracking-wider text-white sm:py-4 sm:text-sm">
        <span className="hidden sm:inline">
          Copyright &copy; {new Date().getFullYear()} · raipiot · 苏州睿朴麟信息科技有限公司版权所有
        </span>

        <div className="flex flex-col items-center space-y-3 sm:hidden">
          <span>Copyright &copy; {new Date().getFullYear()} · raipiot</span>
          <span>苏州睿朴麟信息科技有限公司版权所有</span>
        </div>

        <div className="flex flex-col items-center space-x-0 space-y-3 text-xs sm:flex-row sm:space-x-10 sm:space-y-0">
          <Link
            className="flex cursor-pointer items-center transition-all active:opacity-80"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61019002002266"
            target="_blank"
          >
            <Image
              className="me-1.5 inline select-none"
              src="/img/police.png"
              alt=""
              width={16}
              height={16}
            />
            <span className="underline-offset-4 hover:underline">陕公网安备 61019002002266号</span>
          </Link>
          <Link
            className="cursor-pointer underline-offset-4 transition-all hover:underline active:opacity-80"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
          >
            陕 ICP 备 2022012948号
          </Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer
