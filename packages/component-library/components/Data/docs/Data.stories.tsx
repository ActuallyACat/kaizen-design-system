import * as React from "react"
import { Heading } from "@kaizen/component-library"

import { withDesign } from "storybook-addon-designs"
import { Data } from ".."
import { figmaEmbed } from "../../../../../storybook/helpers"
import { CATEGORIES } from "../../../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Data`,
  component: Data,
  parameters: {
    docs: {
      description: {
        component: 'import { Data } from "@kaizen/component-library"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A1288"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => <Data {...args}>{args.children}</Data>

DefaultStory.args = {
  variant: "large",
  prefixUnit: "$",
  children: "363K",
}

DefaultStory.storyName = "Default (with args)"

export const LightBackground = () => (
  <div
    style={{
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "repeat(2, min-content)",
    }}
  >
    <div>
      <Heading variant="heading-2">Prefix</Heading>
      <Data variant="large" prefixUnit="$">
        {"1200"}
      </Data>
      <Data variant="medium" prefixUnit="$">
        {"1000"}
      </Data>
      <Data tag="span" variant="small" prefixUnit="$">
        {"800"}
      </Data>
    </div>
    <div>
      <Heading variant="heading-2">Suffix</Heading>
      <Data variant="large" suffixUnit="%">
        {"1200"}
      </Data>
      <Data variant="medium" suffixUnit="%">
        {"1000"}
      </Data>
      <Data tag="span" variant="small" suffixUnit="%">
        {"800"}
      </Data>
    </div>
  </div>
)

export const DarkBackground = () => (
  <div
    style={{
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "repeat(2, min-content)",
    }}
  >
    <div>
      <Heading color="white" variant="heading-2">
        Prefix
      </Heading>
      <Data color="white" variant="large" prefixUnit="$">
        {"1200"}
      </Data>
      <Data color="white" variant="medium" prefixUnit="$">
        {"1000"}
      </Data>
      <Data color="white" tag="span" variant="small" prefixUnit="$">
        {"800"}
      </Data>
    </div>
    <div>
      <Heading color="white" variant="heading-2">
        Suffix
      </Heading>
      <Data color="white" variant="large" suffixUnit="%">
        {"1200"}
      </Data>
      <Data color="white" variant="medium" suffixUnit="%">
        {"1000"}
      </Data>
      <Data color="white" tag="span" variant="small" suffixUnit="%">
        {"800"}
      </Data>
    </div>
  </div>
)

DarkBackground.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
