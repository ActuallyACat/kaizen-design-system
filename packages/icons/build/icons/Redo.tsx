import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Redo = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M15.832 9.209A9.168 9.168 0 009.764 6.92C5.673 6.92 2.21 9.587 1 13.274l2.081.687a7.035 7.035 0 016.683-4.84 6.97 6.97 0 014.502 1.659l-3.182 3.18h7.92V6.04L15.832 9.21z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Redo)
