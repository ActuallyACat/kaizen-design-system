import React, { useState } from "react"
import { Select } from "@kaizen/draft-select"
import type {
  OptionTypeBase,
  ValueContainerProps,
  GroupedOptionsType,
} from "react-select"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Select (Tree)",
  component: Select,
  parameters: {
    info: {
      text: `
      import { AsyncSelect, Select } from "@kaizen/draft-select"
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14321%3A65630"
    ),
  },
  decorators: [withDesign],
}

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "300px", margin: "12px auto" }}>{children}</div>
)

const ALL_ITEMS = "___ALL___"
type OptionType = OptionTypeBase
const ValueContainer = ({
  children,
  hasValue,
  getValue,
}: ValueContainerProps<OptionType, true>) => (
  <>
    <div>
      {hasValue ? (
        <span>
          Team Members:
          {getValue()
            .filter(v => v.value !== ALL_ITEMS)
            .map(v => v.label)
            .join(", ")}
        </span>
      ) : (
        <span>Team Members</span>
      )}
    </div>
  </>
)

export const MultiSelectTree = () => {
  const [selectedValues, setSelectedValues] = useState<OptionType[]>([])

  const groupedOptions: GroupedOptionsType<OptionType> = [
    {
      options: [{ value: ALL_ITEMS, label: "All" }],
    },
    {
      label: "Team A",
      options: [
        { value: "Mindy", label: "Mindy" },
        { value: "Jaime", label: "Jaime" },
        { value: "Rafa", label: "Rafa" },
        { value: "Elaine", label: "Elaine" },
      ],
    },
    {
      label: "Team B",
      options: [
        { value: "Julio", label: "Julio" },
        { value: "Priyanka", label: "Priyanka" },
        { value: "Prince", label: "Prince" },
        { value: "Charith", label: "Charith" },
        { value: "Nick", label: "Nick" },
      ],
    },
  ]

  return (
    <StoryContainer>
      <Select
        options={groupedOptions}
        hideSelectedOptions={false}
        components={{
          ValueContainer,
        }}
        isMulti={true}
        onChange={(value: OptionType[], action) => {
          if (action.action === "select-option") {
            if (action.option.value === ALL_ITEMS) {
              // select all the things, a flatmap would be nice
              const allOptions = [] as OptionType[]
              groupedOptions.forEach(x =>
                x.options.forEach(opt => allOptions.push(opt))
              )
              setSelectedValues(allOptions)
            } else {
              setSelectedValues(value)
            }
          } else if (action.action === "deselect-option") {
            if (action.option.value === ALL_ITEMS) {
              setSelectedValues([])
            } else {
              value = value.filter(x => x.value !== ALL_ITEMS)
              setSelectedValues(value)
            }
          }
        }}
        value={selectedValues}
      />
    </StoryContainer>
  )
}
