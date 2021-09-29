import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Launch = (props: withAccessibleIconProps) => (
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM8.4 13.6l4.8-3.6-4.8-3.6v7.2z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Launch)
