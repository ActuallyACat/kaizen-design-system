import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Full = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M2 10c0 4.416 3.584 8 8 8s8-3.584 8-8-3.584-8-8-8-8 3.584-8 8z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Full)
