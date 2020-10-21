import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { TextAreaField } from "@kaizen/draft-form"

import React from "react"

interface RenderProps {
  controlledValue: string
  updateValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => any
}

interface Props {
  render: (props: RenderProps) => JSX.Element
}

class WithState extends React.Component<Props> {
  public state = {
    controlledValue: "Controlled value",
  }

  constructor(props: Props) {
    super(props)
    this.updateValue = this.updateValue.bind(this)
  }

  public updateValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      controlledValue: event.target.value,
    })
  }

  public render() {
    const { render } = this.props
    return (
      <div>
        {render({
          controlledValue: this.state.controlledValue,
          updateValue: this.updateValue,
        })}
      </div>
    )
  }
}

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "98%", margin: "1%" }}>{children}</div>
)

const reversedBg = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export default {
  title: "TextAreaField (React)",
  component: TextAreaField,
  parameters: {
    info: {
      text: `
      import { TextAreaField } from "@kaizen/draft-form"
      `,
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
    />
  </ExampleContainer>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultLarge = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      rows={7}
    />
  </ExampleContainer>
)

DefaultLarge.storyName = "Default, Large"

export const DefaultError = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      status="error"
      validationMessage="Enter a reply"
    />
  </ExampleContainer>
)

DefaultError.storyName = "Default, Error"

export const DefaultPrefilled = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      onChange={() => undefined}
      defaultValue="A prefilled value in uncontrolled mode"
    />
  </ExampleContainer>
)

DefaultPrefilled.storyName = "Default, Prefilled & uncontrolled"

export const DefaultControlled = () => (
  <ExampleContainer>
    <WithState
      render={({ controlledValue, updateValue }) => (
        <TextAreaField
          id="reply"
          labelText="Your reply"
          value={controlledValue}
          onChange={updateValue}
        />
      )}
    />
  </ExampleContainer>
)

DefaultControlled.storyName = "Default, Controlled"

export const DefaultWithDesc = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      description="Your reply will only be seen by you"
    />
  </ExampleContainer>
)

DefaultWithDesc.storyName = "Default, With description"

export const DefaultInline = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      inline={true}
    />
  </ExampleContainer>
)

DefaultInline.storyName = "Default, Inline"

export const DefaultErrorAndDesc = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      status="error"
      validationMessage="Enter a reply"
      description="Your reply will only be seen by you"
    />
  </ExampleContainer>
)

DefaultErrorAndDesc.storyName = "Default, Error & Description"

export const Reversed = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      reversed
    />
  </ExampleContainer>
)

Reversed.storyName = "Reversed"
Reversed.parameters = { ...reversedBg }

export const ReversedErrorAndDesc = () => (
  <ExampleContainer>
    <TextAreaField
      id="reply"
      labelText="Your reply"
      placeholder="Write your reply..."
      onChange={() => undefined}
      status="error"
      validationMessage="Enter a reply"
      description="Your reply will only be seen by you"
      reversed
    />
  </ExampleContainer>
)

ReversedErrorAndDesc.storyName = "Reversed, Error & Description"
ReversedErrorAndDesc.parameters = { ...reversedBg }
