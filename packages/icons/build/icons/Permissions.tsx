import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Permissions = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M5.91 11.638c-.9 0-1.637-.737-1.637-1.637S5.01 8.364 5.91 8.364s1.637.737 1.637 1.637-.737 1.637-1.637 1.637zm4.624-3.274A4.903 4.903 0 005.91 5.091 4.913 4.913 0 001 10c0 2.709 2.2 4.91 4.91 4.91a4.903 4.903 0 004.624-3.273h3.56v3.273h3.273v-3.273h1.636V8.364h-8.47z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Permissions)
