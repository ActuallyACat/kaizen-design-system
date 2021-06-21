import * as React from "react"
import { Tile } from "@kaizen/draft-tile"
import { Coaching } from "@kaizen/draft-illustration"
import { Button } from "@kaizen/draft-button"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { Grid } from "../KaizenDraft/Tile/Grid"

export default {
  title: "POC",
  component: Tile,
  parameters: {},
}

export const TilePoc = () => {
  const GenericTileContent = (
    <>
      <Box>
        <Heading variant="heading-3">Test heading</Heading>
      </Box>
      <Box pt={1}>
        <Paragraph variant="body">
          Providing further details to suggest a path forward or promote a
          feature that allows the user to progress with confidence.
        </Paragraph>
      </Box>
    </>
  )

  return (
    <Grid columns={4} rows="">
      <Grid.Item span="1">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
          <Tile.Cta>
            <Button label="test" />
          </Tile.Cta>
        </Tile>
      </Grid.Item>
      <Grid.Item span="span 2">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
        </Tile>
      </Grid.Item>
      <Grid.Item span="span 2">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
        </Tile>
      </Grid.Item>
      <Grid.Item span="span 1">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
        </Tile>
      </Grid.Item>
      <Grid.Item span="span 1">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
        </Tile>
      </Grid.Item>
      <Grid.Item span="span 1">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
        </Tile>
      </Grid.Item>
      <Grid.Item span="span 1">
        <Tile illustration={<Coaching alt="" />}>
          <Tile.Body>{GenericTileContent}</Tile.Body>
        </Tile>
      </Grid.Item>
    </Grid>
  )
}
