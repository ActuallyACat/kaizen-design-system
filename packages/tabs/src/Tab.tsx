import React, { ReactNode, SyntheticEvent } from "react"
import classnames from "classnames"
import styles from "./styles.scss"

interface TabProps {
  tabId: string
  isSelected?: boolean
  children: ReactNode
  onClick?: (e: SyntheticEvent) => void
}

export const Tab = (props: TabProps) => {
  const { tabId, onClick, isSelected, ...rest } = props

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={tabId}
      tabIndex={isSelected ? undefined : -1}
      onClick={onClick}
      className={classnames(styles.tab, {
        [styles.selected]: isSelected,
      })}
      {...rest}
    >
      {props.children}
    </button>
  )
}
