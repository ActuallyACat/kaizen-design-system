import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Close = (props: withAccessibleIconProps) => (
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
        d="M14.654 4.167L10 8.82 5.346 4.167l-1.18 1.18L8.823 10l-4.655 4.655 1.179 1.178L10 11.18l4.654 4.654 1.18-1.178L11.18 10l4.655-4.653z"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Close)
