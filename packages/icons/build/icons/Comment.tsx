import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Comment = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M16.4 2A1.6 1.6 0 0118 3.6v9.6a1.6 1.6 0 01-1.6 1.6H5.2L2 18l.008-14.4c0-.884.708-1.6 1.592-1.6h12.8zm-4 7.2H14V7.6h-1.6v1.6zm-3.2 0h1.6V7.6H9.2v1.6zM6 9.2h1.6V7.6H6v1.6z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Comment)
