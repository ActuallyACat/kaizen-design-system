import * as React from "react"
import { Card } from "@kaizen/draft-card"
import { SpotProps } from "@kaizen/draft-illustration"
import { ButtonProps } from "@kaizen/draft-button"
import { Box } from "@kaizen/component-library"
import styles from "./TilePoc.module.scss"

const TileBody = ({ children }) => <>{children}</>

const TileCta = ({
  children,
}: {
  children:
    | React.ReactElement<ButtonProps>
    | Array<React.ReactElement<ButtonProps>>
}) => <>{children}</>

export interface TileProps {
  illustration: React.ReactElement<SpotProps>
  children: any
}

export class Tile extends React.Component<TileProps> {
  static Body = TileBody
  static Cta = TileCta

  render() {
    const { illustration: Illustration, children } = this.props

    let body
    let cta
    if (children.length) {
      ;[body, cta] = children
    } else {
      body = children
    }

    return (
      <Card>
        <Box p={1} classNameAndIHaveSpokenToDST={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.illustrationWrapper}>{Illustration}</div>
            {body && <div className={styles.bodyWrapper}>{body}</div>}
          </div>
          {cta && <div className={styles.ctaWrapper}>{cta}</div>}
        </Box>
      </Card>
    )
  }
}
