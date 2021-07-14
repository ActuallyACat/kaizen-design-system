import * as React from "react"
import { Box, Icon, Paragraph } from "@kaizen/component-library"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks"

export const Docs = () => (
  <>
    <Title />
    <Box pt={1}>
      <code>{'import { Icon } from "@kaizen/component-library";'}</code>
    </Box>
    <Box pt={1}>
      <Paragraph variant="body">
        Icons inherit width and <code>currentColour</code> from it's parent
        component. To modify the icon color, ensure you have a{" "}
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
)
