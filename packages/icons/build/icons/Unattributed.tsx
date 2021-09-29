import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Unattributed = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M17.497 3.145c.825 0 1.5.686 1.5 1.523l-.008 10.664c0 .838-.667 1.523-1.492 1.523H2.503c-.825 0-1.5-.685-1.5-1.523V4.668c0-.837.675-1.523 1.5-1.523h14.994zM7.001 5.43c-1.245 0-2.25 1.02-2.25 2.286C4.752 8.98 5.757 10 7.002 10s2.25-1.02 2.25-2.284C9.25 6.45 8.246 5.43 7 5.43zm4.499 9.14v-.761c0-1.524-3-2.361-4.499-2.361-1.5 0-4.498.837-4.498 2.36v.763H11.5zm2.535-2.107h1.125v-1.071h-1.125v1.071zm2.29-4.15c.32-.307.522-.735.522-1.207 0-1.183-1.007-2.142-2.25-2.142-1.242 0-2.249.96-2.249 2.142h1.125c0-.588.506-1.07 1.125-1.07s1.124.482 1.124 1.07c0 .296-.123.563-.332.756l-.696.675a2.107 2.107 0 00-.659 1.516v.268h1.125c0-.803.254-1.125.659-1.516l.505-.493z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Unattributed)
