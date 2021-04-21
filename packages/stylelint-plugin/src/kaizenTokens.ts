import fs from "fs"
import flatmap from "lodash.flatmap"
import postcssValueParser from "postcss-value-parser"
import { getParser } from "./utils"
const scssParser = getParser("scss")

/* Pass in just the name of a module which is used to import variable.
  E.g. "color" or "color-vars", NOT "@kaizen/design-tokens/sass/color".
  Assumes that the SASS and LESS modules contain the same variables
*/
const getVarsFromKaizenModule = (moduleName: string) => {
  const sassModulePath = `@kaizen/design-tokens/sass/${moduleName}`
  const lessModulePath = `@kaizen/design-tokens/less/${moduleName}`
  const source = fs
    .readFileSync(require.resolve(sassModulePath + ".scss"))
    .toString()
  const root = scssParser.parse(source)
  const variables = {} as Record<string, string>
  root.walkDecls(decl => {
    if (decl.variable) {
      variables[decl.prop.substr(1)] = decl.value
    }
  })
  return {
    moduleName,
    variables,
    sassModulePath,
    lessModulePath,
  } as const
}

export const kaizenTokensByModule = {
  color: getVarsFromKaizenModule("color"),
  colorVars: getVarsFromKaizenModule("color-vars"),
  animation: getVarsFromKaizenModule("animation"),
  animationVars: getVarsFromKaizenModule("animation-vars"),
  border: getVarsFromKaizenModule("border"),
  borderVars: getVarsFromKaizenModule("border-vars"),
  layout: getVarsFromKaizenModule("layout"),
  layoutVars: getVarsFromKaizenModule("layout-vars"),
  shadow: getVarsFromKaizenModule("shadow"),
  shadowVars: getVarsFromKaizenModule("shadow-vars"),
  spacing: getVarsFromKaizenModule("spacing"),
  spacingVars: getVarsFromKaizenModule("spacing-vars"),
  typography: getVarsFromKaizenModule("typography"),
  typographyVars: getVarsFromKaizenModule("typography-vars"),
  variableIdentifiers: getVarsFromKaizenModule("variable-identifiers"),
}

export type KaizenToken = {
  name: string
  sassModulePath: string
  lessModulePath: string
  value: string
  moduleName: string
  cssVariable?: CSSVariable
}

export type CSSVariable = {
  identifier: string
  fallback?: string
}

const parseCssVariableValue = (value: string): CSSVariable | undefined => {
  const parsedValue = postcssValueParser(value)
  const firstNode = parsedValue.nodes[0]
  if (firstNode?.type === "function" && firstNode.value === "var") {
    const parameterNodes = firstNode.nodes

    // Identifier should be something like: "--kz-var"
    const identifier = parameterNodes[0].value
    const firstDividerIndex = parameterNodes.findIndex(
      node => node.type === "div"
    )

    // If there are no fall back values (i.e. there is no comma)
    if (firstDividerIndex < 0) {
      return {
        identifier,
      }
    }

    const firstNodeAfterDivider = parameterNodes[firstDividerIndex + 1]

    if (firstNodeAfterDivider) {
      return {
        identifier,
        fallback: postcssValueParser.stringify(
          parameterNodes.slice(firstDividerIndex + 1)
        ),
      }
    }
  }
  return undefined
}

export const kaizenTokensByName = flatmap(
  Object.values(kaizenTokensByModule),
  module =>
    Object.entries(module.variables).map(([variableName, value]) => ({
      [variableName]: {
        name: variableName,
        value,
        cssVariable: parseCssVariableValue(value),
        moduleName: module.moduleName,
        sassModulePath: module.sassModulePath,
        lessModulePath: module.lessModulePath,
      },
    }))
).reduce(
  (acc, next) => ({ ...acc, ...next }),
  {} as Record<string, KaizenToken | undefined>
)
