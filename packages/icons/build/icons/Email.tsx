import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Email = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M16.4 3.5H3.6c-.88 0-1.592.72-1.592 1.6L2 14.7c0 .88.72 1.6 1.6 1.6h12.8c.88 0 1.6-.72 1.6-1.6V5.1c0-.88-.72-1.6-1.6-1.6zm0 3.2l-6.4 4-6.4-4V5.1l6.4 4 6.4-4v1.6z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Email)
