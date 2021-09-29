import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Share = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M14.82 13.31c-.611 0-1.158.24-1.575.618l-5.728-3.333c.041-.185.073-.37.073-.563 0-.193-.032-.378-.073-.562L13.18 6.17a2.404 2.404 0 004.05-1.76A2.407 2.407 0 0014.82 2a2.407 2.407 0 00-2.41 2.41c0 .193.03.378.072.562l-5.662 3.3a2.4 2.4 0 00-1.64-.65 2.407 2.407 0 00-2.41 2.41 2.407 2.407 0 002.41 2.41 2.4 2.4 0 001.64-.65l5.719 3.34c-.04.17-.065.345-.065.522A2.349 2.349 0 0014.82 18a2.35 2.35 0 002.345-2.346 2.349 2.349 0 00-2.345-2.345"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Share)
