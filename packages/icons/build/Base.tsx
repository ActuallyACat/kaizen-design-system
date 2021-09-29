import * as React from "react"
import { ReactNode } from "react-select/node_modules/@types/react"
const getUniqueId = require("uuid/v5")

// pinched from here: packages/component-library/util/uuidFromString.ts
export const uuidFromString = (value: string): string => {
  // Random valid uuid namespace
  const NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341"

  return getUniqueId(value, NAMESPACE)
}

type RolesType =
  | "img" // meaningful, title should be read aloud to users who can't see it
  | "presentation" // decorative, should be silent to users who can't see it

export interface withAccessibleIconProps {
  inheritSize?: boolean
  role?: RolesType
  title?: string
  desc?: string
}

export const withAccessibleIcon = WrappedComponent => ({
  role = "img",
  title = "",
  desc = "",
  ...otherProps
}: withAccessibleIconProps) => {
  const titleId = uuidFromString(title)
  const descId = uuidFromString(desc)
  const isMeaningfulImg = role === "img"

  // @TODO show a ts error is title is an empty string, or
  // role is img and title is an empty string

  const renderTitle = (): JSX.Element | false =>
    isMeaningfulImg && !!title && <title id={titleId}>{title}</title>

  const renderDesc = (): JSX.Element | false =>
    isMeaningfulImg && !!desc && <desc id={descId}>{desc}</desc>

  const labelledBy =
    // read out title and description together if both are present
    desc ? `${titleId} ${descId}` : `${titleId}`

  const accessibilityProps = {
    role,
    ["aria-hidden"]: isMeaningfulImg ? undefined : true,
  }

  return (
    <WrappedComponent
      renderTitle={renderTitle}
      renderDesc={renderDesc}
      accessibilityProps={accessibilityProps}
      {...otherProps} />
  )
}
