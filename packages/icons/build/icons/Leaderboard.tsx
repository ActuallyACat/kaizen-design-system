import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Leaderboard = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M16.4 10c0-.894.72-1.625 1.6-1.625v-3.25c0-.894-.72-1.625-1.6-1.625H3.6c-.88 0-1.592.731-1.592 1.625v3.25c.88 0 1.592.731 1.592 1.625s-.712 1.625-1.6 1.625v3.25c0 .894.72 1.625 1.6 1.625h12.8c.88 0 1.6-.731 1.6-1.625v-3.25c-.88 0-1.6-.731-1.6-1.625zm-4.111 4.5l-2.785-1.882L6.719 14.5l.84-3.37L5 8.927l3.298-.204L9.504 5.5l1.198 3.232L14 8.936l-2.56 2.201.849 3.363z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" fillRule="nonzero" xlinkHref="#prefix__a" />
  </svg>
)

export default withAccessibleIcon(Leaderboard)
