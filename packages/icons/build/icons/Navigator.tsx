import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Navigator = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.01 3.997v1.858h2.786V8.64h1.857V3.997H12.01zm-8.663 0V8.64h1.857V5.855H7.99V3.997H3.347zm11.449 7.363v2.787H12.01v1.856h4.643V11.36h-1.857zm-11.449 0v4.643H7.99v-1.856H5.204V11.36H3.347z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Navigator)
