import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Dashboard = (props: withAccessibleIconProps) => (
  <svg
    width={16}
    height={16}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10.889 7.333H18V2h-7.111v5.333zM2 10.89h7.111V2H2v8.889zM10.889 18H18V9.111h-7.111V18zM2 18h7.111v-5.333H2V18z"
        id="prefix__a"
      />
    </defs>
    <use
      fill="currentColor"
      xlinkHref="#prefix__a"
      transform="translate(-2 -2)"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Dashboard)
