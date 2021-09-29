import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Demographics = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M2 14.444v1.778h5.333v-1.778H2zM2 3.778v1.778h8.889V3.778H2zM10.889 18v-1.778H18v-1.778h-7.111v-1.777H9.11V18h1.778zM5.556 7.333v1.778H2v1.778h3.556v1.778h1.777V7.333H5.556zM18 10.89V9.11H9.111v1.778H18zm-5.333-3.556h1.777V5.556H18V3.778h-3.556V2h-1.777v5.333z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Demographics)
