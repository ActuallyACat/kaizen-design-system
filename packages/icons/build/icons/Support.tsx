import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Support = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10 14.5c-.92 0-1.776-.276-2.489-.75l-3.213 3.213A8.963 8.963 0 0010 19a8.96 8.96 0 005.685-2.023l-3.215-3.215A4.482 4.482 0 0110 14.5m6.963-10.201L13.75 7.51c.474.713.75 1.57.75 2.489 0 .913-.272 1.762-.738 2.471l3.215 3.215A8.967 8.967 0 0019 10c0-2.164-.764-4.15-2.037-5.702M5.5 10c0-.913.272-1.762.738-2.471L3.023 4.314A8.965 8.965 0 001 10c0 2.164.764 4.15 2.037 5.701l3.213-3.213A4.484 4.484 0 015.5 10M10 5.5c.92 0 1.776.276 2.489.75l3.213-3.213A8.967 8.967 0 0010 1a8.96 8.96 0 00-5.685 2.023l3.214 3.215A4.482 4.482 0 0110 5.5"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Support)
