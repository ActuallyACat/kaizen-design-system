import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Repeats = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M4 5h10v3l4-4-4-4v3H2v6h2V5zm10 10H4v-3l-4 4 4 4v-3h12v-6h-2v4z"
        fill="currentColor"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Repeats)
