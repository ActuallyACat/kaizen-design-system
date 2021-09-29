import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Check = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        id="prefix__a"
        d="M8.333 14.342l-4.166-4.167L5.342 9l2.991 2.983 6.325-6.325 1.175 1.184z"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Check)
