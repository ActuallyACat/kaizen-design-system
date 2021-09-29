import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Closed = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.307 2.636A2.464 2.464 0 0010 1a2.464 2.464 0 00-2.308 1.636H4.636c-.9 0-1.637.737-1.637 1.637v13.09c0 .9.737 1.637 1.637 1.637H15.36c.9 0 1.637-.736 1.637-1.636V4.273c0-.9-.738-1.637-1.637-1.637h-3.054zm-1.489.819c0 .45-.369.818-.818.818a.82.82 0 01-.818-.818.82.82 0 01.818-.819c.45 0 .818.369.818.819zm-5.727 8.181l1.154-1.153 2.119 2.11 5.391-5.391 1.154 1.162-6.545 6.545-3.273-3.273z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Closed)
