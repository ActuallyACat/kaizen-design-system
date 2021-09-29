import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Organization = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 5.6V2H1v16.2h18V5.6h-9zM4.6 16.4H2.8v-1.8h1.8v1.8zm0-3.6H2.8V11h1.8v1.8zm0-3.6H2.8V7.4h1.8v1.8zm0-3.6H2.8V3.8h1.8v1.8zm3.6 10.8H6.4v-1.8h1.8v1.8zm0-3.6H6.4V11h1.8v1.8zm0-3.6H6.4V7.4h1.8v1.8zm0-3.6H6.4V3.8h1.8v1.8zm9 10.8H10v-1.8h1.8v-1.8H10V11h1.8V9.2H10V7.4h7.2v9zm-1.8-7.2h-1.8V11h1.8V9.2zm0 3.6h-1.8v1.8h1.8v-1.8z"
      fill="currentColor"
    />
  </svg>
)

export default withAccessibleIcon(Organization)
