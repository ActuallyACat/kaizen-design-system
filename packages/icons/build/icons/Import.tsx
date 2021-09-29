import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Import = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M15.823 8.444A5.938 5.938 0 0010 3.667 5.943 5.943 0 004.735 6.86 4.752 4.752 0 00.5 11.583a4.749 4.749 0 004.75 4.75h10.292a3.96 3.96 0 003.958-3.958c0-2.09-1.627-3.784-3.677-3.93zm-4.24 5.514H8.417v-3.166H6.042L10 6.833l3.958 3.959h-2.375v3.166z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Import)
