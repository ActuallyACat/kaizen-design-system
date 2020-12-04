import { Label } from "@kaizen/draft-form"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import classnames from "classnames"
import * as React from "react"
import RadioInput from "./Primitives/RadioInput"

import styles from "./styles.scss"

export type RadioProps = {
  id: string
  automationId?: string
  name: string
  value: string
  labelText: string | React.ReactNode
  selectedStatus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  inline?: boolean
}

type Radio = React.FunctionComponent<RadioProps>

const Radio: Radio = ({
  id = "",
  automationId,
  name = "",
  value = "",
  labelText,
  selectedStatus = false,
  onChange,
  inline = false,
  disabled = false,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.container, {
      [styles.selected]: selectedStatus,
      [styles.disabled]: disabled,
      [styles.inline]: inline,
    })}
  >
    <Label
      id={`${id}-field-label`}
      htmlFor={id}
      automationId={`${id}-field-label`}
      labelText={labelText}
      labelType="radio"
    >
      <RadioInput
        id={id}
        automationId={`${id}-radio-input`}
        disabled={disabled}
        selectedStatus={selectedStatus}
        value={value}
        name={name}
        onChange={onChange}
      />
    </Label>
  </div>
)

export default withDeprecatedComponent(Radio, {
  warning:
    "This component is deprecated, use the Radio available in @kaizen/draft-form instead.",
})
