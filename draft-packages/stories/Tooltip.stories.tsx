import * as React from "react"

import { Paragraph } from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import { Tooltip } from "@kaizen/draft-tooltip"

export default {
  title: "Tooltip (React)",
}

export const DefaultBelowKaizenSiteDemo = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Tooltip position="below" text="This is below the tooltip">
      <Tag>Below</Tag>
    </Tooltip>
  </div>
)

DefaultBelowKaizenSiteDemo.story = {
  name: "Default - Below (Kaizen Site Demo)",
  component: Tooltip,
  parameters: {
    info: {
      text: `
      import { Tooltip } from "@kaizen/draft-tooltip"
      `,
    },
  },
}

export const DefaultAbove = () => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <div style={{ display: "inline-block", position: "relative" }}>
      <Tooltip position="above" text="This is above the tooltip">
        <Tag>Above</Tag>
      </Tooltip>
    </div>
  </div>
)

DefaultAbove.story = {
  name: "Default - Above",
}

export const Inline = () => (
  <div
    style={{
      margin: "100px",
      display: "flex",
      justifyContent: "center",
      width: "400px",
    }}
  >
    <div style={{ display: "inline-block", position: "relative" }}>
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nulla
        quas corporis? Perspiciatis, ratione voluptas{" "}
        <Tooltip inline text="This is above the tooltip">
          <Tag>ad veniam sapiente</Tag>
        </Tooltip>{" "}
        Maxime harum, ducimus maiores itaque pariatur quod vel porro mollitia.
        Lorem ipsum dolor sit{" "}
        <Tooltip inline text="Open in new tab">
          <a href="#">
            amet consectetur adipisicing elit Itaque obcaecati maxime molestiae
            blanditiis pariatur
          </a>
        </Tooltip>
        . Magni perspiciatis assumenda in adipisci, eaque commodi quidem dolore,
        tempore provident animi{" "}
        <Tooltip inline text="This is below the tooltip" position="below">
          <Tag>veniam sapiente ad</Tag>
        </Tooltip>{" "}
      </Paragraph>
    </div>
  </div>
)

Inline.story = {
  name: "Inline",
}
