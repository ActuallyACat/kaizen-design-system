import * as React from "react";
import cx from "classnames"
import styles from "./Grid.module.scss"

interface Grid {
  columns: 1 | 2 | 3 | 4,
  children: React.ReactNode
}


// The intention of this component is for usage in page layout
// composition only. Do not use this component nested within itself,
// or where it is not a child of the PageLayout container
export const Grid = ({
  columns = 2,
  children
}: Grid) => (
  <div
    className={cx(styles.gridWrapper, {
      [styles.twoCol]: columns === 2,
      [styles.oneCol]: columns === 1
    })}>
    {children}
  </div>
)
