import * as React from "react"
import { StencilButton } from "../stencil-components/components"

export default {
  title: "Stencil Button",
  component: StencilButton,
  args: {
    label: "label",
    disabled: false,
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: () => `
      <Button thing={thing} />
    `,
  },
}

export const StencilComponent = args => <StencilButton disabled {...args} />
