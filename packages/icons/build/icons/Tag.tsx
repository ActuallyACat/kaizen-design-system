import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Tag = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M13.315 3.978l-10.419.01a1.892 1.892 0 00-1.894 1.884v8.256c0 1.042.853 1.885 1.894 1.885l10.419.01c.635 0 1.203-.313 1.544-.796l4.139-5.239-4.14-5.215a1.888 1.888 0 00-1.543-.795z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Tag)
