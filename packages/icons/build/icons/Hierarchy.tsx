import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Hierarchy = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M8.202 6.434h3.601V4.567h-3.6v1.867zm.9.834v1.8H1.9v3.601h1.8v-1.8h5.402v1.8h1.801v-1.8h5.402v1.8h1.8v-3.6h-7.202V7.267h-1.8zm6.302 8.169h3.601v-1.868h-3.6v1.868zm-7.202 0h3.601v-1.868h-3.6v1.868zm-7.202 0h3.601v-1.868H1v1.868z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Hierarchy)
