import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Search = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M13.435 12.063h-.723l-.256-.247a5.92 5.92 0 001.437-3.87 5.946 5.946 0 10-5.947 5.947 5.92 5.92 0 003.87-1.437l.247.256v.723L16.637 18 18 16.637l-4.565-4.574zm-5.489 0A4.111 4.111 0 013.83 7.946 4.111 4.111 0 017.946 3.83a4.111 4.111 0 014.117 4.116 4.111 4.111 0 01-4.117 4.117z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Search)
