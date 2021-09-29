import * as React from "react"
import { withAccessibleIcon, withAccessibleIconProps } from "../Base"

const Users = (props: withAccessibleIconProps) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M13.6 9.6a1.994 1.994 0 001.991-2c0-1.104-.888-2-1.991-2a2 2 0 000 4m-6-.8a2.39 2.39 0 002.392-2.4 2.397 2.397 0 10-4.793 0c0 1.328 1.073 2.4 2.401 2.4m6 2.4c-1.464 0-4.4.736-4.4 2.2v1.8H18v-1.8c0-1.464-2.937-2.2-4.4-2.2m-6-.8c-1.865 0-5.6.936-5.6 2.8v2h5.6v-1.8c0-.68.264-1.872 1.896-2.776C8.8 10.48 8.128 10.4 7.6 10.4"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)

export default withAccessibleIcon(Users)
