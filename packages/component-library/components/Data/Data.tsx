import classNames from "classnames"
import * as React from "react"

import styles from "./Data.module.scss"

export type DataVariants = "small" | "medium" | "large"

export type AllowedTags =
  | "pre"
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label"

export type AllowedColors = "dark" | "white"

export interface DataProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  color?: AllowedColors
  /**
   * HTML elements that are allowed on Data. When not supplied, the tag is inferred from
   * the variant.
   */
  tag?: AllowedTags
  /**
   * Allowed Data variants
   */
  variant: DataVariants
  /**
   * A unit type that prepends the children
   */
  prefixUnit?: string
  /**
   * A unit type that append the children
   */
  suffixUnit?: string
}

export const Data = ({
  classNameAndIHaveSpokenToDST,
  children,
  color = "dark",
  tag,
  variant,
  prefixUnit,
  suffixUnit,
  ...otherProps
}: DataProps) => {
  const InferredTag = tag === undefined ? translateVariantToTag(variant) : tag

  const className = classNames([
    styles.data,
    styles[variant],
    classNameAndIHaveSpokenToDST,
    styles[color],
  ])

  return (
    <InferredTag className={className}>
      {renderUnit({ unit: prefixUnit, variant })}
      {children}
      {renderUnit({ unit: suffixUnit, variant })}
    </InferredTag>
  )
}

function renderUnit({
  unit,
  variant,
}: {
  variant: DataVariants
  unit?: string
}) {
  return unit ? <span className={styles[`${variant}Unit`]}>{unit}</span> : null
}

/**
 * A helper to infer the tag when not explicitly passed as a prop
 * @param varaint Variant of the Data
 */
const translateVariantToTag = (varaint: DataVariants) => {
  switch (varaint) {
    case "large":
      return "h2"
    case "medium":
      return "h3"
    case "small":
    default:
      return "h4"
  }
}
