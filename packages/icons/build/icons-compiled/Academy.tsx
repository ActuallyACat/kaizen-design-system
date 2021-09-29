import * as React from "react"

export const Academy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M10 2L0 7.455l10 5.454 8.182-4.464v6.281H20V7.455L10 2zm0 12.726l-6.364-3.471v3.636L10 18.364l6.364-3.473v-3.636L10 14.726z"
        id="prefix__a"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#prefix__a" fillRule="evenodd" />
  </svg>
)
