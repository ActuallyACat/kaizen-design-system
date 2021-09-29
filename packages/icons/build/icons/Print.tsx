import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Print = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M5.2 6h9.6V2.8H5.2V6zm10.4.8c1.328 0 2.4 1.072 2.4 2.4V14h-3.2v3.2H5.2V14H2V9.2c0-1.328 1.072-2.4 2.4-2.4h11.2zm0 3.2c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8-.44 0-.8.36-.8.8 0 .44.36.8.8.8zm-8.8 5.6h6.4v-4H6.8v4z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Print)
