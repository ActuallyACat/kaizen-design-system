import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Undo = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10.24 6.921A9.166 9.166 0 004.172 9.21L1 6.041v7.92h7.92L5.739 10.78A6.967 6.967 0 0110.24 9.12c3.12 0 5.76 2.028 6.684 4.84l2.08-.686c-1.21-3.688-4.672-6.354-8.764-6.354"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Undo)
