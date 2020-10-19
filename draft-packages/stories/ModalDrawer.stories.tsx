import * as React from "react"

import { Drawer } from "@kaizen/draft-drawer"

export default {
  title: "Drawer (React)",
  component: Drawer,
  parameters: {
    info: {
      text: `
        import { Drawer } from "@kaizen/draft-drawer";
      `,
    },
  },
}

export const DefaultStory = () => (
  <Drawer
    isOpen={true}
    type="positive"
    title="hello modal drawer"
    onDismiss={() => null}
  >
    hello world!
  </Drawer>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
