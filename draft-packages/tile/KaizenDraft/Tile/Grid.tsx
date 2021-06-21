import * as React from "react"
import styles from "./Grid.module.scss"

const GridItem = ({ children, span }) => (
  <div style={{ gridColumn: `span ${span}` }}>{children}</div>
)

interface GridProps {
  columns: number
  rows: string
  children: any
}

export const Grid = ({ children, columns }: GridProps) => (
  <div
    className={styles.gridWrapper}
    style={{
      gridTemplateColumns: `repeat(${columns} 1fr`,
    }}
  >
    {children}
  </div>
)

Grid.Item = GridItem
