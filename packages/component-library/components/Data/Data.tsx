import classNames from "classnames"
import { createElement, HTMLAttributes } from "react"

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

export interface DataProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Data. When not supplied, the tag is inferred from
   * the variant.
   */
  tag?: AllowedTags
  /**
   * Allowed Data variants
   */
  variant: DataVariants
}

export const Data = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  ...otherProps
}: DataProps) => {
  const inferredTag = tag === undefined ? translateVariantToTag(variant) : tag

  const className = classNames([
    styles.data,
    styles[variant],
    classNameAndIHaveSpokenToDST,
  ])

  return createElement(inferredTag, { ...otherProps, className }, children)
}

/**
 * A helper to infer the tag when not explicitly passed as a prop
 * @param varaint Variant of the Data
 */
const translateVariantToTag = (varaint: DataVariants) => {
  switch (varaint) {
    case "large":
      return "h1"
    case "medium":
      return "h2"
    case "small":
    default:
      return "h3"
  }
}
