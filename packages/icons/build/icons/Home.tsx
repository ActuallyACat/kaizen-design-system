import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Home = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        id="prefix__a"
        d="M8.118 18v-5.647h3.764V18h4.706v-7.53h2.824L10 2 .588 10.47h2.824V18z"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Home)
