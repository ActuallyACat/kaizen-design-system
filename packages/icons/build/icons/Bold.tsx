import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Bold = (props: withAccessibleIconProps) => (
  <svg
    width={11}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.6 6.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H0v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM3 2.5h3c.83 0 1.5.67 1.5 1.5S6.83 5.5 6 5.5H3v-3zm3.5 9H3v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
      fill="currentColor"
    />
  </svg>
)

export default withAccessibleIcon(Bold)
