import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Visible = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M9.831 3.75c-4.09 0-7.583 2.544-8.998 6.135 1.415 3.591 4.908 6.135 8.998 6.135 4.09 0 7.583-2.544 8.998-6.135-1.415-3.591-4.908-6.135-8.998-6.135zm0 10.225a4.091 4.091 0 01-4.09-4.09 4.091 4.091 0 014.09-4.09 4.091 4.091 0 014.09 4.09 4.091 4.091 0 01-4.09 4.09zm0-6.544a2.45 2.45 0 00-2.454 2.454 2.45 2.45 0 002.454 2.454 2.45 2.45 0 002.454-2.454 2.45 2.45 0 00-2.454-2.454z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Visible)
