import { RadioField } from "@kaizen/draft-form"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

const ExampleContent = () => (
  <div style={{ padding: "1em 2em", maxWidth: "400px" }} />
)
type RenderProps = {
  selectedStatus: boolean
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

class RadioFieldExample extends React.Component<Props> {
  state = {
    selectedStatus: false,
  }

  constructor(props: Props) {
    super(props)

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      selectedStatus: true,
    })
  }

  render() {
    const { render } = this.props

    return (
      <>
        {render({
          selectedStatus: this.state.selectedStatus,
          onChangeHandler: this.onChangeHandler,
        })}
      </>
    )
  }
}

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Radio Field`,
  component: RadioField,
  parameters: {
    docs: {
      description: {
        component: 'import { RadioField } from "@kaizen/draft-form"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14354%3A68219"
    ),
  },
  decorators: [withDesign],
}
const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const InteractiveKaizenSiteDemo = () => (
  <RadioFieldExample
    render={({ selectedStatus, onChangeHandler }) => (
      <RadioField
        name="radio"
        onChange={onChangeHandler}
        id="radio-1"
        selectedStatus={selectedStatus as any}
        value="radio-1"
        labelText={
          <span>
            This is a label with a{" "}
            <a href="http://google.com" target="_blank">
              link
            </a>
          </span>
        }
      />
    )}
  />
)

InteractiveKaizenSiteDemo.storyName = "Interactive (Kaizen Site Demo)"

export const UnselectedDisabled = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    selectedStatus={false}
    disabled={true}
    value="radio-1"
  >
    <ExampleContent />
  </RadioField>
)

UnselectedDisabled.storyName = "Unselected disabled"

export const UnselectedDefault = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    selectedStatus={false}
    disabled={false}
    value="radio-1"
  >
    <ExampleContent />
  </RadioField>
)

UnselectedDefault.storyName = "Unselected default"

export const SelectedDefault = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    selectedStatus={true}
    disabled={false}
    value="radio-1"
  >
    <ExampleContent />
  </RadioField>
)

SelectedDefault.storyName = "Selected default"

export const SelectedDisabled = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    selectedStatus={true}
    disabled={true}
    value="radio-1"
  >
    <ExampleContent />
  </RadioField>
)

SelectedDisabled.storyName = "Selected disabled"

export const Rtl = () => (
  <div dir="rtl">
    <RadioField
      name="radio"
      id="radio-1"
      labelText="Label"
      selectedStatus={true}
      disabled={true}
      value="radio-1"
    >
      <ExampleContent />
    </RadioField>
  </div>
)

Rtl.storyName = "RTL"

export const ReversedDefaultUnselected = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    value="radio-1"
    reversed
  >
    <ExampleContent />
  </RadioField>
)
ReversedDefaultUnselected.story = {
  name: "Reversed Default Unselected",
  parameters: {
    ...reversedBg,
  },
}

export const ReversedDefaultUnselectedDisabled = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    value="radio-1"
    reversed
    disabled
  >
    <ExampleContent />
  </RadioField>
)
ReversedDefaultUnselectedDisabled.story = {
  name: "Reversed Default Unselected Disabled ",
  parameters: {
    ...reversedBg,
  },
}

export const ReversedDefaultSelected = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    selectedStatus
    value="radio-1"
    reversed
  >
    <ExampleContent />
  </RadioField>
)
ReversedDefaultSelected.story = {
  name: "Reversed Default Selected",
  parameters: {
    ...reversedBg,
  },
}

export const ReversedDefaultSelectedDisabled = () => (
  <RadioField
    name="radio"
    id="radio-1"
    labelText="Label"
    selectedStatus
    value="radio-1"
    reversed
    disabled
  >
    <ExampleContent />
  </RadioField>
)
ReversedDefaultSelectedDisabled.story = {
  name: "Reversed Default Selected Disabled",
  parameters: {
    ...reversedBg,
  },
}
