import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Kebab = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M-4 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        id="prefix__a"
      />
    </defs>
    <use
      fill="currentColor"
      transform="rotate(-90 7 5)"
      xlinkHref="#prefix__a"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Kebab)
