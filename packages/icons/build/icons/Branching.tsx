import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Branching = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10.53 15.706H10v-2h.53v-1.177H10v-2h1v1.78c1.236-.403 2.195-.403 2.654-.403 1.743 0 5.24.916 5.24 2.66v2.105H10.53v-.965zm5.496-8.088A2.375 2.375 0 0113.654 10a2.383 2.383 0 010-4.765 2.375 2.375 0 012.372 2.383zm-1.06 0c0-.734-.586-1.324-1.312-1.324a1.324 1.324 0 000 2.647c.726 0 1.313-.59 1.313-1.323zm-3.378 5.613v2.38h6.248v-1.046c0-.642-2.342-1.6-4.182-1.6-.744 0-1.36.059-2.066.266zM10 1h1v2h-1V1zm0 3.176h1v2h-1v-2zm0 3.177h1v2h-1v-2zm0 9.53h1v2h-1v-2zM3.87 7.617A2.375 2.375 0 016.24 5.235a2.383 2.383 0 010 4.765A2.375 2.375 0 013.87 7.618zm5.496 9.053H1v-2.106c0-1.743 3.498-2.66 5.241-2.66.516 0 1.663 0 3.125.572v4.194z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Branching)
