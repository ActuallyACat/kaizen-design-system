import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Configure = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M17.537 4.683L14.37 7.85l-2.22-2.22 3.167-3.165c-1.747-.837-3.93-.546-5.385.909a4.71 4.71 0 00-1.055 5.021l-6.658 6.66c-.292.29-.292.763 0 1.018l1.71 1.71c.255.29.728.29 1.018 0l6.659-6.659a4.71 4.71 0 005.021-1.055c1.454-1.455 1.746-3.638.91-5.385"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Configure)
