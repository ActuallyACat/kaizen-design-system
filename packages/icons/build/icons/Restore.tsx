import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Restore = (props: withAccessibleIconProps) => (
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.286 2C7.026 2 3.57 5.425 3.57 9.65H1l3.334 3.307.06.118L7.857 9.65H5.286c0-3.29 2.683-5.95 6-5.95s6 2.66 6 5.95-2.683 5.95-6 5.95a5.977 5.977 0 01-4.235-1.751l-1.217 1.207a7.708 7.708 0 005.452 2.244c4.26 0 7.714-3.425 7.714-7.65C19 5.425 15.546 2 11.286 2zm-.857 4.25v4.25l3.668 2.159.617-1.028-3-1.769V6.25H10.43z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
)

export default withAccessibleIcon(Restore)
