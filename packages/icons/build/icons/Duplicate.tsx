import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Duplicate = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M13.273 2H4.545c-.803 0-1.454.65-1.454 1.455v10.181h1.454V3.455h8.728V2zm2.182 2.91h-8C6.65 4.91 6 5.56 6 6.363v10.181C6 17.35 6.65 18 7.455 18h8c.803 0 1.454-.65 1.454-1.455V6.364c0-.804-.65-1.455-1.454-1.455z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Duplicate)
