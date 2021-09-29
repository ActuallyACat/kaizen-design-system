import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Translation = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10.725 12.558l-2.117-2.091.025-.025A14.6 14.6 0 0011.725 5h2.442V3.333H8.333V1.667H6.667v1.666H.833v1.659h9.309A13.094 13.094 0 017.5 9.458a13.038 13.038 0 01-1.925-2.791H3.908a14.635 14.635 0 002.484 3.8L2.15 14.65l1.183 1.183L7.5 11.667l2.592 2.591.633-1.7zm4.692-4.225H13.75l-3.75 10h1.667l.933-2.5h3.958l.942 2.5h1.667l-3.75-10zm-2.184 5.834l1.35-3.609 1.35 3.609h-2.7z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Translation)
