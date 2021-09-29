import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Report = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path d="M8 18h4V2H8v16zm6 0h4V7h-4v11zM2 18h4v-8H2v8z" id="prefix__a" />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Report)
