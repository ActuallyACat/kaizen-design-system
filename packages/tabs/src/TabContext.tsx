import React, { ReactNode, createContext, useContext, useState } from "react"

const Context = createContext<null | {
  selectedTab?: string
  updateSelectedTab?: (tabId: string) => void
}>(null)

export interface TabContextProps {
  selectedTab?: string
  defaultSelectedTab?: string
  children: ReactNode
}

export const TabContext = (props: TabContextProps) => {
  const { selectedTab, defaultSelectedTab, children } = props
  const [internalSelected, setInternalSelected] = useState<string | undefined>(
    defaultSelectedTab
  )
  const context = {
    selectedTab: selectedTab || internalSelected,
    updateSelectedTab: selectedTab
      ? undefined
      : (tabId: string) => setInternalSelected(tabId),
  }
  return <Context.Provider value={context}>{children}</Context.Provider>
}

export const useTabContext = () => useContext(Context)
