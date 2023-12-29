import type { SVGProps } from 'react'

export default function ArrowVertical(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="71"
      height="256"
      viewBox="0 0 71 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.76 0.349991L0.650024 47.68H17.51L17.51 123.61H54L54 47.68H70.86L35.76 0.349991Z"
        fill="#B9C4D5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.650024 208.53L35.76 255.86L70.86 208.53H54L54 132.6H17.51L17.51 208.53H0.650024Z"
        fill="#B9C4D5"
      />
    </svg>
  )
}
