import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Kiosk = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M14.353 2h.314c.92 0 1.353.747 1.353 1.667v12.666c0 .92-.747 1.667-1.667 1.667H5.677c-.92 0-1.667-.747-1.667-1.667V3.667C4.01 2.747 4.757 2 5.677 2h8.676zM5 14.667h10V4H5v10.667zm4 1.666c0 .553.446 1 1 1s1-.447 1-1c0-.553-.446-1-1-1s-1 .447-1 1z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Kiosk)
