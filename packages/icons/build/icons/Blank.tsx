import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Blank = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.303 2.636A2.446 2.446 0 0010 1a2.446 2.446 0 00-2.303 1.636H4.635c-.904 0-1.637.733-1.637 1.637v13.09c0 .905.733 1.637 1.637 1.637H15.36c.904 0 1.636-.732 1.636-1.636V4.273c0-.904-.732-1.637-1.636-1.637h-3.057zm-1.485.819a.818.818 0 11-1.636 0 .818.818 0 011.636 0z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Blank)
