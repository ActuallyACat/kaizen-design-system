import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Insight = (props: withAccessibleIconProps) => (
  <svg
    width={12}
    height={16}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M7.603 10.8c0 1.328 1.072 2.4 2.4 2.4 1.328 0 2.4-1.072 2.4-2.4 0-1.328-1.072-2.4-2.4-2.4a2.397 2.397 0 00-2.4 2.4zm8.4 5.272V6.8l-4.4-4.8H5.598c-.88 0-1.592.72-1.592 1.6l-.008 12.8c0 .88.712 1.6 1.592 1.6h8.812c.36 0 .68-.12.952-.32l-3.143-3.544A4.001 4.001 0 016.003 10.8c0-2.208 1.792-4 4-4s4 1.792 4 4c0 .816-.248 1.568-.664 2.2l2.663 3.072z"
        id="prefix__a"
      />
    </defs>
    <use
      fill="currentColor"
      xlinkHref="#prefix__a"
      transform="translate(-4 -2)"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Insight)
