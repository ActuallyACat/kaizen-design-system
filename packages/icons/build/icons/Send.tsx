import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Send = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        id="prefix__a"
        d="M2.008 3.143L2 8.475l11.425 1.523L2 11.52l.008 5.332 15.987-6.855z"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Send)
