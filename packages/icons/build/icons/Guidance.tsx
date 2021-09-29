import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Guidance = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M7.2 17.2c0 .44.36.8.8.8h3.2c.44 0 .8-.36.8-.8v-.8H7.2v.8zM9.6 2A5.606 5.606 0 004 7.6c0 1.904.952 3.576 2.4 4.592V14c0 .44.36.8.8.8H12c.44 0 .8-.36.8-.8v-1.808A5.597 5.597 0 0015.2 7.6c0-3.088-2.512-5.6-5.6-5.6zm2.28 8.88l-.68.48v1.84H8v-1.84l-.68-.48A3.997 3.997 0 015.6 7.6c0-2.208 1.792-4 4-4s4 1.792 4 4c0 1.304-.64 2.528-1.72 3.28z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Guidance)
