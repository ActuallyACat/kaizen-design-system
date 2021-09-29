import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Export = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M15.827 8.446a5.94 5.94 0 00-5.824-4.78 5.944 5.944 0 00-5.266 3.196A4.754 4.754 0 00.5 11.585a4.75 4.75 0 004.751 4.752h10.295a3.96 3.96 0 003.959-3.96c0-2.09-1.627-3.785-3.678-3.931zm-1.865 2.348l-3.96 3.959-3.959-3.96H8.42V7.627h3.167v3.168h2.376z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Export)
