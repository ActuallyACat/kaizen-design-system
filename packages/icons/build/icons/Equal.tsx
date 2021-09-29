import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Equal = (props: withAccessibleIconProps) => (
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM6.153 12.1h7.694v-1.6H6.153v1.6zm0-2.881h7.694v-1.6H6.153v1.6z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Equal)
