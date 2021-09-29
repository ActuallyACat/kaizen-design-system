import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Edit = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M1.556 14.666V18h3.519l10.383-9.837-3.519-3.334-10.383 9.837zM18.17 5.594a.858.858 0 000-1.258L15.979 2.26a.978.978 0 00-1.328 0l-1.717 1.627 3.519 3.334 1.717-1.627z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Edit)
