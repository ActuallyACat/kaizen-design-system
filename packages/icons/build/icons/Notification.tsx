import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Notification = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M7.004 3.318L5.882 2.196a8.176 8.176 0 00-3.231 6.157H4.22a6.624 6.624 0 012.784-5.035zm9.718 5.035h1.568a8.226 8.226 0 00-3.231-6.157l-1.114 1.122a6.663 6.663 0 012.777 5.035zm-1.546.392c0-2.408-1.286-4.423-3.529-4.957v-.533c0-.651-.525-1.177-1.176-1.177-.651 0-1.177.526-1.177 1.177v.533c-2.25.534-3.53 2.541-3.53 4.957v3.922l-1.568 1.568v.785h12.55v-.785l-1.57-1.568V8.745zm-4.705 8.628c.11 0 .211-.008.313-.032.51-.11.926-.455 1.13-.925.078-.189.117-.392.117-.612H8.894a1.58 1.58 0 001.577 1.569z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Notification)
