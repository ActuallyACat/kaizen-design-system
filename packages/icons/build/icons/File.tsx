import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const File = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M11.613 2l4.39 4.657V16.4a1.6 1.6 0 01-1.6 1.6H5.59a1.593 1.593 0 01-1.592-1.6l.008-12.8c0-.884.708-1.6 1.592-1.6h6.015zm-.8 5.6h4.4l-4.4-4.4v4.4zm-4 4h6.4V10h-6.4v1.6zm0 3.2h6.4v-1.6h-6.4v1.6z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(File)
