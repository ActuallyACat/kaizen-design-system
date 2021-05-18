import * as React from "react"
import { Grid } from ".."
import { Tile } from "./ExampleTile"

export default {
  title: "Grid (React)",
  component: Grid,
}

export const DefaultStory = () => (
  <Grid columns={2}>
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
  </Grid>
)

DefaultStory.storyName = "Grid (default)"
