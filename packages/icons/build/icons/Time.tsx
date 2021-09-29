import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Time = (props: withAccessibleIconProps) => (
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm3.36 11.36l.64-1.04-3.6-2.16V6H9.2v4.8l4.16 2.56z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Time)
