import { Tag } from "@kaizen/draft-tag"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"
import {
  PartialResponsiveOverride,
  Typography,
  useResponsiveTypography,
} from "./index"

export default {
  title: `${CATEGORIES.components}/Typography`,
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'import { Tag } from "@kaizen/draft-tag"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A90332"
    ),
  },
  decorators: [withDesign],
}

export const DefaultMediumKaizenSiteDemo = () => (
  <Typography tag="div" variant="display-0">
    blah
  </Typography>
)
DefaultMediumKaizenSiteDemo.storyName = "Typography - Normal"

export const responsiveDemo = () => {
  const display0Override = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
  }

  return (
    <PartialResponsiveOverride styleObject={{ display0: display0Override }}>
      <Typography tag="div" variant="display-0">
        blah
      </Typography>
    </PartialResponsiveOverride>
  )
}

DefaultMediumKaizenSiteDemo.storyName = "Typography - Responsive"
