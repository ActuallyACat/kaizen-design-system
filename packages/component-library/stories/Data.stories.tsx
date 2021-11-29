import * as React from "react"

import { withDesign } from "storybook-addon-designs"
import { Data } from "../components/Data"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Data`,
  component: Data,
  parameters: {
    docs: {
      description: {
        component: 'import { Data } from "@kaizen/component-library"',
      },
    },
  },
  decorators: [withDesign],
}

export const DefaultStory = () => (
  <>
    <Data variant="large">{"1200"}</Data>
    <Data variant="medium">{"1000"}</Data>
    <Data variant="small">{"800"}</Data>
  </>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"
