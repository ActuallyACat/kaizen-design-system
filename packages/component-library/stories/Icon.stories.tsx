import * as React from "react"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Box, Icon, Paragraph } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks"

export default {
  title: "Icon (React)",
  component: Icon,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Box pt={1}>
            <code>{'import { Icon } from "@kaizen/component-library";'}</code>
          </Box>
          <Box pt={1}>
            <Paragraph variant="body">
              Icons inherit width and <code>currentColour</code> from it's
              parent component. To modify the icon color, ensure you have a{" "}
              <code>color</code> attribute set on the wrapping element:
            </Paragraph>
          </Box>
          <Box>
            <code>
              <pre>
                {`<div style={{color: colorTokens.kz.color.wisteria["800"]}}>
  <Icon />
</div>
`}
              </pre>
            </code>
          </Box>
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
}

export const MeaningfulKaizenSiteDemo = () => (
  // the wrapper with the fixed with is to solve a problem when this is used
  // as a site demo: the iframe was getting a height of 0px in Firefox
  <div style={{ width: "20px", color: colorTokens.kz.color.wisteria["800"] }}>
    <Icon
      icon={configureIcon}
      title="Warning"
      desc="Aliens approaching!"
      role="img"
      inheritSize={true}
    />
  </div>
)

MeaningfulKaizenSiteDemo.storyName = "Meaningful (Kaizen Site Demo)"

export const Presentational = () => (
  <Icon icon={configureIcon} role="presentation" />
)

export const InheritSize = () => (
  <div style={{ width: "100%" }}>
    <Icon icon={configureIcon} role="presentation" inheritSize={true} />
  </div>
)
