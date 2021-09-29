import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Archived = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.307 2.636A2.463 2.463 0 0010 1a2.463 2.463 0 00-2.307 1.636h-3.06c-.9 0-1.636.737-1.636 1.637v13.09c0 .9.736 1.637 1.636 1.637h10.73c.9 0 1.636-.736 1.636-1.636V4.273c0-.9-.736-1.637-1.636-1.637h-3.056zm-1.489.819a.82.82 0 01-.818.818.82.82 0 01-.818-.818.82.82 0 01.818-.819.82.82 0 01.818.819zM10 14.909l-4.09-4.09h2.454V7.544h3.272v3.273h2.455L10 14.91z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Archived)
