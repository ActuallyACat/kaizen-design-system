import * as React from "react"
import { useTheme } from "@kaizen/design-tokens"
import { useMediaQueries } from "@kaizen/responsive"
import { CATEGORIES } from "../../../../storybook/constants"
import { PartialResponsiveOverride, Typography } from "./index"

export default {
  title: `${CATEGORIES.components}/Typography`,
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'import { Typography } from "@kaizen/xxx"',
      },
    },
  },
}

export const DefaultMediumKaizenSiteDemo = () => (
  <Typography tag="div" variant="display-0">
    blah
  </Typography>
)
DefaultMediumKaizenSiteDemo.storyName = "Typography - Normal"

export const responsiveDemo = () => {
  const displayOverride = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
  }
  const {
    queries: { isMediumOrSmaller },
  } = useMediaQueries()
  const {
    typography: { dataLarge },
  } = useTheme()
  const stylesToOverride = isMediumOrSmaller ? displayOverride : dataLarge

  return (
    <PartialResponsiveOverride styleObject={{ display0: stylesToOverride }}>
      <Typography tag="div" variant="display-0">
        blah
      </Typography>
    </PartialResponsiveOverride>
  )
}

DefaultMediumKaizenSiteDemo.storyName = "Typography - Responsive"
