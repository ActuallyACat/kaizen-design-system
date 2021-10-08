import React, {
  ReactNode,
  SyntheticEvent,
  cloneElement,
  Children,
  isValidElement,
} from "react"
import { useTabContext } from "./TabContext"

export interface TabListProps {
  "aria-label": string
  onChange?: (event: SyntheticEvent, newId: string) => void
  selectedTab?: string
  children: ReactNode
}

export const TabList = (props: TabListProps) => {
  const context = useTabContext()
  const { "aria-label": ariaLabel, onChange, children } = props
  const selectedTab = props.selectedTab || context?.selectedTab

  return (
    <div role="tablist" aria-label={ariaLabel}>
      {Children.map(children, child => {
        if (!isValidElement(child)) return
        return cloneElement(child, {
          isSelected: selectedTab === child.props.tabId,
          onClick: (e: SyntheticEvent) => {
            context &&
              context.updateSelectedTab &&
              context.updateSelectedTab(child.props.tabId)
            // ^only need to do this in uncontrolled mode

            onChange && onChange(e, child.props.tabId)
          },
        })
      })}
    </div>
  )
}
