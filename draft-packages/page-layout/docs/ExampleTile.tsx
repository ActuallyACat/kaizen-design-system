import * as React from "react";
import { Card } from "@kaizen/draft-card"
import { Box, Heading, Paragraph } from "@kaizen/component-library";
import { Informative } from "@kaizen/draft-illustration"
import styles from "./throwaway.module.scss"

export const Tile = () => (
  <Card>
    <Box p={2}>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.illustrationWrapper}>
            <Informative alt=""/>
          </span>
        </div>
        <div>
          <Heading variant="heading-1">Some content</Heading>
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </div>
      </div>
    </Box>
  </Card>
)
