import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Tasks = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M15.444 3H4.548c-.864 0-1.54.692-1.54 1.556L3 15.444C3 16.3 3.684 17 4.548 17h10.896C16.3 17 17 16.3 17 15.444V4.556C17 3.692 16.3 3 15.444 3zm0 9.333h-3.11A2.335 2.335 0 0110 14.667a2.335 2.335 0 01-2.333-2.334h-3.12V4.556h10.897v7.777z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Tasks)
