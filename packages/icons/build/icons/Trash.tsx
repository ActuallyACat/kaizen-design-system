import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Trash = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M13 2.889L12.143 2H7.857L7 2.889H4v1.778h12V2.889h-3zM5.005 16.222c0 .982.767 1.778 1.714 1.778h6.562c.947 0 1.714-.796 1.714-1.778V5.556h-9.99v10.666z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Trash)
