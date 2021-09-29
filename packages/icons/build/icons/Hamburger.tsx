import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Hamburger = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path d="M2 16h16v-2H2v2zm0-5h16V9H2v2zm0-7v2h16V4H2z" id="prefix__a" />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Hamburger)
