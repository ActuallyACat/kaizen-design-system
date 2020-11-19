// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from "react"
import { MyComponent } from "../stencil-components/components"

export default {
  title: "Stencil Test (React)",
  component: MyComponent,
  args: {
    first: "a",
    last: "stencil component",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
}

export const StencilComponent = args => (
  <MyComponent first="a" last="stencil component" {...args} />
)
