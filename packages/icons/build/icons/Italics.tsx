import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Italics = (props: withAccessibleIconProps) => (
  <svg
    width={12}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 0v3h2.21l-3.42 8H0v3h8v-3H5.79l3.42-8H12V0H4z"
      fill="currentColor"
    />
  </svg>
)

export default withAccessibleIcon(Italics)
