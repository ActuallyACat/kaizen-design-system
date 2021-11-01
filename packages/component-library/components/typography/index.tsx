import * as React from "react"
import classNames from "classnames"
import { defaultTheme, TypographyFont, Theme } from "@kaizen/design-tokens"
import { omit } from "lodash"
import styles from "./Typography.module.scss"

const TypographyContext = React.createContext(defaultTheme.typography)

export function useResponsiveTypography() {
  const context = React.useContext(TypographyContext)
  if (context === undefined) {
    throw new Error(
      "useResponsiveTypography must be used within a ResponsiveTypographyProvider"
    )
  }
  return context
}

export const PartialResponsiveOverride = ({ styleObject, children }) => (
  <TypographyContext.Consumer>
    {typographyThemeObject => (
      <React.Fragment>
        <TypographyContext.Provider
          value={{ ...typographyThemeObject, ...styleObject }}
        >
          {children}
        </TypographyContext.Provider>
      </React.Fragment>
    )}
  </TypographyContext.Consumer>
)

export type Variants =
  | "display-0"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6"
  | "intro-lede"
  | "body"
  | "small"
  | "extra-small"

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

export type AllowedColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

type Breakpoint = "sm" | "md" | "lg" | "xl"

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  tag: AllowedTags
  /**
   * Allowed heading variants
   */
  variant: Variants
  color?: AllowedColors
  size?: { [key in Breakpoint]?: Variants } & Variants
}

/**
 * To avoid awkwardness in the naming of the classes generated for the line
 * height and font size, we use a pixel suffix. This function maps the theme
 * Object to the correct suffix.
 * @param typographyProperty
 * @returns
 */
const mapThemePropertyToClass = (typographyProperty?: string) => {
  if (typographyProperty === undefined) {
    return ""
  }
  const nameOfClass = parseFloat(typographyProperty.replace("rem", ""))
  return nameOfClass * 16 // convert rem to px
}

export const Typography = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  color = "dark",
  ...otherProps
}: TypographyProps) => {
  const responsiveTypography = useResponsiveTypography()
  const styleObject = mapVariantToStyleObject(variant, responsiveTypography)

  const classes = classNames(
    classNameAndIHaveSpokenToDST,
    styles[color],
    styles[
      `line-height-${mapThemePropertyToClass(styleObject.lineHeight as string)}`
    ],
    styles[
      `font-size-${mapThemePropertyToClass(styleObject.fontSize as string)}`
    ],
    styles[
      `letter-spacing-${mapThemePropertyToClass(
        styleObject.letterSpacing as string
      )}`
    ]
  )

  return (
    <div
      className={classes}
      style={omit(styleObject, "lineHeight", "fontSize")}
      {...otherProps}
    >
      {children}
    </div>
  )
}

function mapVariantToStyleObject(
  variant: string,
  typographyStyles: { [key: string]: Partial<TypographyFont> }
) {
  switch (variant) {
    case "display-0":
      return typographyStyles.display0
    case "heading-1":
      return typographyStyles.heading1
    case "heading-2":
      return typographyStyles.heading2
    case "heading-3":
      return typographyStyles.heading3
    case "heading-4":
      return typographyStyles.heading4
    case "heading-5":
      return typographyStyles.heading5
    case "heading-6":
      return typographyStyles.heading6
    case "intro-lede":
      return typographyStyles.introLede
    case "body":
      return typographyStyles.body
    case "small":
      return typographyStyles.small
    case "extra-small":
      return typographyStyles.extraSmall
    default:
      return typographyStyles.body
  }
}
