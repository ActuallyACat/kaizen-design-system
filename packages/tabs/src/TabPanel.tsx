import React, { ReactNode } from "react"
import classnames from "classnames"
import { useTabContext } from "./TabContext"
import styles from "./styles.scss"

interface TabPanelProps {
  tabId: string
  children: ReactNode
}

export const TabPanel = (props: TabPanelProps) => {
  const context = useTabContext()
  if (!context) return null

  const { tabId, children } = props
  const isSelected = context.selectedTab === tabId

  return (
    <div
      className={classnames({
        [styles.hidden]: !isSelected,
      })}
    >
      {children}
    </div>
  )
}
