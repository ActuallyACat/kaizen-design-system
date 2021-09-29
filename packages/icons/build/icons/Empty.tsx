import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Empty = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M2 10c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8-8-3.584-8-8zm8 6.4c3.536 0 6.4-2.864 6.4-6.4 0-3.536-2.864-6.4-6.4-6.4A6.398 6.398 0 003.6 10c0 3.536 2.864 6.4 6.4 6.4z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Empty)
