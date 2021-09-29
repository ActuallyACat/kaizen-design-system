import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Sync = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M3.638 6.365l3.637 3.638H4.547a5.461 5.461 0 005.456 5.456c.919 0 1.792-.228 2.546-.637l1.328 1.327a7.216 7.216 0 01-3.874 1.128 7.273 7.273 0 01-7.275-7.274H0l3.638-3.638zm11.82 3.638a5.46 5.46 0 00-5.455-5.457c-.919 0-1.791.227-2.547.637L6.13 3.855a7.214 7.214 0 013.874-1.128 7.273 7.273 0 017.275 7.276h2.728l-3.638 3.637-3.637-3.637h2.728z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Sync)
