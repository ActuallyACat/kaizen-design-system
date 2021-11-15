import * as React from "react"
import {
  ThemeManager,
  ThemeProvider,
  defaultTheme,
} from "@kaizen/design-tokens"
import "./polyfills"
import "./fonts.module.scss"

/**
 * Initialise the themeManager with the default theme. This is a singleton so this should not
 * be redeclared in consuming apps.
 *
 * Should you need to need to modify the default theme, you can do so by importing and calling
 * `themeManager.setAndApplyTheme` from this package
 */
export const themeManager = new ThemeManager(defaultTheme)

export const Container = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider themeManager={themeManager}>{children}</ThemeProvider>
)
