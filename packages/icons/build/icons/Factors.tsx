import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Factors = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.8 14.496l-2.8-2.94-2.8 2.94a2.667 2.667 0 11-1.144-1.44L9.11 10V7.173C8.08 6.8 7.333 5.823 7.333 4.667A2.663 2.663 0 0110 2a2.663 2.663 0 012.667 2.667c0 1.155-.747 2.133-1.778 2.506V10l3.056 3.056a2.667 2.667 0 11-1.144 1.44z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Factors)
