import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Minus = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path id="prefix__a" d="M13.996 10.833H6.011V9.167h7.985z" />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Minus)
