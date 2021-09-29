import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Surveys = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.193 2.454h3.251c.856 0 1.556.655 1.556 1.455v13.636c0 .8-.7 1.455-1.556 1.455H4.556C3.7 19 3 18.345 3 17.545V3.91c0-.8.7-1.455 1.556-1.455h3.25C8.134 1.611 8.99 1 10 1c1.01 0 1.867.61 2.193 1.454zm-5.83 6.091h7.273V7.091H6.363v1.454zm0 2.909h7.273V9.999H6.363v1.455zm0 2.908h5.091v-1.454h-5.09v1.454zM10 2.454a.73.73 0 00-.727.728c0 .4.327.727.727.727a.73.73 0 00.726-.727.73.73 0 00-.726-.728z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Surveys)
