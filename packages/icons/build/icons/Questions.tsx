import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Questions = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M13 13H3v1.667h10V13zm0-6.667H3V8h10V6.333zm-10 5h15V9.667H3v1.666zM3 18h15v-1.667H3V18zM3 3v1.667h15V3H3z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Questions)
