import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Invisible = (props: withAccessibleIconProps) => (
  <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.003 5.497a4.094 4.094 0 014.092 4.093c0 .532-.107 1.03-.295 1.497l2.39 2.39a9.671 9.671 0 002.807-3.887c-1.416-3.593-4.91-6.139-9.003-6.139a9.53 9.53 0 00-3.257.573l1.768 1.768a3.972 3.972 0 011.498-.295zM1.818 3.263L3.684 5.13l.377.377A9.66 9.66 0 001 9.59c1.416 3.592 4.91 6.138 9.003 6.138 1.268 0 2.48-.246 3.584-.688l.344.344 2.398 2.39 1.04-1.04L2.857 2.224l-1.04 1.04zM6.344 7.79l1.269 1.269c-.041.171-.066.351-.066.532a2.452 2.452 0 002.456 2.455c.18 0 .36-.025.532-.066l1.268 1.269a4.057 4.057 0 01-1.8.434A4.094 4.094 0 015.91 9.59c0-.647.163-1.253.433-1.801zm3.528-.638l2.578 2.578.016-.131a2.452 2.452 0 00-2.455-2.456l-.14.009z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default withAccessibleIcon(Invisible)
