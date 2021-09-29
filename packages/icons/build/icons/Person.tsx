import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Person = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10.005 6c-1.069 0-3.2.536-3.2 1.6l-.01 4.878h1.61V18h3.2v-5.522h1.59l.01-4.878c0-1.064-2.133-1.6-3.2-1.6m0-.8a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Person)
