import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Delta = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M2 10c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm8-4.63l-5.018 8.028h10.036L10 5.369zm2.131 6.401H7.87L10 8.36l2.131 3.412z"
        id="prefix__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={10} cy={10} r={7} />
      <use fill="currentColor" xlinkHref="#prefix__a" />
    </g>
  </svg>
)

export default withAccessibleIcon(Delta)
