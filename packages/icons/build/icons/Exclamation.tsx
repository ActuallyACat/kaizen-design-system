import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Exclamation = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10 2a8 8 0 110 16 8 8 0 010-16zm.8 12v-1.6H9.2V14h1.6zm0-3.2V6H9.2v4.8h1.6z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Exclamation)
