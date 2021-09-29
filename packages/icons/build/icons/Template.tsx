import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Template = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.307 2.636h3.061c.9 0 1.637.737 1.637 1.637v13.09c0 .9-.737 1.637-1.637 1.637H4.641c-.9 0-1.636-.736-1.636-1.636V4.273c0-.9.736-1.637 1.636-1.637h3.052A2.463 2.463 0 0110 1c1.064 0 1.964.687 2.307 1.636zm-.302 8.637h1.455V9.818h-1.455v1.455zM9.182 3.455c0 .45.368.818.818.818a.82.82 0 00.818-.818.82.82 0 00-.818-.819.82.82 0 00-.818.819zm.106 7.818h1.454V9.818H9.288v1.455zm-2.745 0h1.455V9.818H6.543v1.455z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Template)
