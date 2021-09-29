import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Save = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M14.444 2H3.778C2.79 2 2 2.8 2 3.778v12.444C2 17.2 2.791 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V5.556L14.444 2zM10 16.222a2.663 2.663 0 01-2.667-2.666A2.663 2.663 0 0110 10.889a2.663 2.663 0 012.667 2.667A2.663 2.663 0 0110 16.222zm2.667-8.889h-8.89V3.778h8.89v3.555z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Save)
