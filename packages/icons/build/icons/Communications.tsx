import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Communications = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M17.2 5.2h-1.6v7.2H5.2V14c0 .44.36.8.8.8h8.8L18 18V6c0-.44-.36-.8-.8-.8zM14 10V2.8c0-.44-.36-.8-.8-.8H2.8c-.44 0-.8.36-.8.8V14l3.2-3.2h8c.44 0 .8-.36.8-.8z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Communications)
