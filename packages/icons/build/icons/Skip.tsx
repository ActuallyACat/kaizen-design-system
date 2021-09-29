import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Skip = (props: withAccessibleIconProps) => (
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM6.8 12.935l4.272-3.068L6.8 6.8v6.135zM11.6 6.8v6.135h1.005V6.8H11.6z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Skip)
