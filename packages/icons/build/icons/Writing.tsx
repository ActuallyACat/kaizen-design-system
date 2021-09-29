import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Writing = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M1 18.55h18.002V15.7H1v2.85zM16.53 4.333a.689.689 0 000-1.009L14.78 1.66a.78.78 0 00-1.061 0L12.25 3.052l2.813 2.673 1.466-1.393zm-2.216 2.105l-2.813-2.672-7.5 7.126v2.672h2.812l7.501-7.126z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Writing)
