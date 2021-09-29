import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Power = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M9.111 10.889h1.778V2H9.11v8.889zm6.076-6.965l-1.258 1.258A6.21 6.21 0 0116.222 10a6.223 6.223 0 01-12.444 0A6.21 6.21 0 016.07 5.182L4.813 3.924A7.972 7.972 0 002 10a8 8 0 0016 0 7.972 7.972 0 00-2.813-6.076z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Power)
