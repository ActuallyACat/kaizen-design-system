import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Experience = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M11.645 4.653c-.62-.003-3.092 4.004-3.092 4.004 1.054 1.512 2.04 3.41 2.04 3.41l-1.235-.009C7.976 9.912 6.684 7.704 5.908 7.71 5.04 7.716 1 15.343 1 15.343h17.993s-6.086-10.685-7.348-10.69z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Experience)
