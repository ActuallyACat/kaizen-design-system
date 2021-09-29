import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Minimize = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 2.269L14.239 7.03 17.2 10H10V2.8l2.961 2.961L17.731 1 19 2.269zM2.269 19l4.761-4.761L10 17.2V10H2.8l2.961 2.961L1 17.731 2.269 19z"
      fill="currentColor"
    />
  </svg>
)

export default withAccessibleIcon(Minimize)
