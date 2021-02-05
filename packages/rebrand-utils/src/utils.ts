/* eslint-disable no-console */
import fs from "fs"
import path from "path"
import createQueryWrapper, { QueryWrapper } from "query-ast"
import { unflatten } from "flat"
import { parse, stringify, Node } from "scss-parser"
import Color from "color"
import {} from "@kaizen/design-tokens"
const normaliseCssNumber = (num: string): number => {
  if (num.indexOf("%") !== -1) {
    return parseInt(num.replace("%", ""), 10) / 100
  } else {
    return parseInt(num, 10)
  }
}

const euclideanDistance = (
  vecA: [number, number, number],
  vecB: [number, number, number]
) =>
  Math.sqrt(
    Math.pow(vecA[0] - vecB[0], 2) +
      Math.pow(vecA[1] - vecB[1], 2) +
      Math.pow(vecA[2] - vecB[2], 2)
  )

const functionsOfInterest = {
  "add-tint": (color: string, percent: number) =>
    Color("white").mix(Color(color), percent).hex(),
}

const functionsOfInterestKeys = new Set(Object.keys(functionsOfInterest))
const findCustomProperties = (
  stylesheetNode: Node
): Record<string, string | undefined> => {
  const $ = createQueryWrapper(stylesheetNode)
  const rootPseudoClass = $("rule")
    .find("pseudo_class")
    .find(
      wrapper =>
        wrapper.node.type === "identifier" && wrapper.node.value === "root"
    )
    .parents("rule")

  const declarations = rootPseudoClass
    .find("declaration")
    .children("property")
    .filter(
      node =>
        node?.children[0]?.node?.value === "-" &&
        node?.children[1]?.node?.value === "-"
    )

    .parent()

  const keys = declarations
    .find("identifier")
    .map(node => node.node.value.toString())
  const values = declarations
    .find("value")
    .map(node => stringify(node.node).trim())

  const output: Record<string, string | undefined> = {}

  keys.forEach((key, index) => {
    output[key] = values[index]
  })
  return output
}

const findInvalidFunctions = (stylesheetNode: Node): QueryWrapper<Node> => {
  const $ = createQueryWrapper(stylesheetNode)

  const output = $(
    n =>
      typeof n.node.value === "string" &&
      functionsOfInterestKeys.has(n.node.value)
  )
  return output
}

const run = () => {
  const stylesheetNode = parse(fs.readFileSync("./test.scss").toString())
  const customProperties = findCustomProperties(stylesheetNode)

  console.log("Found properties on :root")
  console.dir(customProperties)
  console.log("Unflattenned Properties")
  console.log(
    JSON.stringify(
      unflatten(customProperties, {
        delimiter: "-",
        object: true,
      }),
      null,
      5
    )
  )

  const invalidFunctions = findInvalidFunctions(stylesheetNode)
  const invalidFunctionName = invalidFunctions.first().value()
  const invalidFunctionParameters = invalidFunctions.next().children()

  const invalidFunctionCustomPropertyKey = invalidFunctionParameters
    .children(wrapper => wrapper.node.value === "var")
    .next("arguments")
    .children("identifier")
    .value()

  const percent = normaliseCssNumber(
    invalidFunctionParameters.filter(/(number|operator)/).value()
  )
  console.log(
    "Found functions of interest with their custom property key usage and 2nd param"
  )
  const functionFound = functionsOfInterest[invalidFunctionName as "add-tint"]
  const customPropertyValue = customProperties[
    invalidFunctionCustomPropertyKey
  ]!!
  const computedValue = functionFound(customPropertyValue, percent)
  /*   const sortedEntries = Object.entries(customProperties)
    .map(a => [
      a[0],
      euclideanDistance(parseToRgb(a[1]!!), parseToRgb(computedValue)),
    ])
    .sort(([keyA, a], [keyZ, z]) => (a as number) - (z as number))
 */
  console.dir({
    name: invalidFunctionName,
    key: invalidFunctionCustomPropertyKey,
    customPropertyValue,
    percent,
    computedValue,
    /*     closestOtherPropertyToComputed: sortedEntries[0], */
  })

  /*
  console.dir(customProperties, { depth: 5 }) */
}
