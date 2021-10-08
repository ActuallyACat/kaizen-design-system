import React, { useState } from "react"
import { TabContext } from "../src/TabContext"
import { TabList } from "../src/TabList"
import { Tab } from "../src/Tab"
import { TabPanel } from "../src/TabPanel"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Tabs`,
  component: TabContext,
  parameters: {
    docs: {
      description: {
        component:
          'import { TabContext, TabList, Tab, TabPanel } from "@kaizen/tabs"',
      },
    },
  },
}

export const Uncontrolled = () => (
  <TabContext defaultSelectedTab="tab-1-green">
    <TabList aria-label="Colors">
      <Tab tabId="tab-1-blue">Blue</Tab>
      <Tab tabId="tab-1-green">Green</Tab>
      <Tab tabId="tab-1-red">Red</Tab>
    </TabList>
    <TabPanel tabId="tab-1-blue">Information about the color blue</TabPanel>
    <TabPanel tabId="tab-1-green">Information about the color green</TabPanel>
    <TabPanel tabId="tab-1-red">Information about the color red</TabPanel>
  </TabContext>
)
Uncontrolled.storyName = "Uncontrolled"

export const Controlled = () => {
  const [selectedTab, setSelectedTab] = useState("tab-2-blue")
  return (
    <TabContext selectedTab={selectedTab}>
      <TabList
        aria-label="Colors"
        onChange={(_, tabId) => setSelectedTab(tabId)}
      >
        <Tab tabId="tab-2-blue">Blue</Tab>
        <Tab tabId="tab-2-green">Green</Tab>
        <Tab tabId="tab-2-red">Red</Tab>
      </TabList>
      <TabPanel tabId="tab-2-blue">Information about the color blue</TabPanel>
      <TabPanel tabId="tab-2-green">Information about the color green</TabPanel>
      <TabPanel tabId="tab-2-red">Information about the color red</TabPanel>
    </TabContext>
  )
}
Controlled.storyName = "Controlled"

export const TabListOnly = () => {
  const [selectedTab, setSelectedTab] = useState("tab-3-blue")
  return (
    <>
      <TabList
        aria-label="Colors"
        onChange={(_, tabId) => setSelectedTab(tabId)}
        selectedTab={selectedTab}
      >
        <Tab tabId="tab-3-blue">Blue</Tab>
        <Tab tabId="tab-3-yellow">Yellow</Tab>
        <Tab tabId="tab-3-red">Red</Tab>
      </TabList>
      {selectedTab === "tab-3-blue" && (
        <div id="tab-3-blue">Custom render of tab content: blue</div>
      )}
      {selectedTab === "tab-3-yellow" && (
        <div id="tab-3-yellow">Custom render of tab content: yellow</div>
      )}
      {selectedTab === "tab-3-red" && (
        <div id="tab-3-red">Custom render of tab content: red</div>
      )}
    </>
  )
}
TabListOnly.storyName = "Tab list only"
