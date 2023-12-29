import type { SVGProps } from 'react'

export default function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="256"
      height="71"
      viewBox="0 0 256 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_39_2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M255.51 35.11L208.18 0V16.86H132.25V53.35H208.18V70.21L255.51 35.11Z"
          fill="#B9C4D5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.33 0L0 35.11L47.33 70.21V53.35H123.26V16.86H47.33V0Z"
          fill="#B9C4D5"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_2">
          <rect
            width="255.51"
            height="70.21"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
