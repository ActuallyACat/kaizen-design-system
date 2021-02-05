import { readFileSync } from "fs"
import Color from "color"
import createQueryWrapper from "query-ast"
import { Node, parse } from "scss-parser"
import { Utils, zenTheme } from "@kaizen/design-tokens"
const functionsOfInterest = {
  "add-tint": (color: string, percent: number) =>
    Color("white").mix(Color(color), percent).hex(),
}
const cssVariables = Utils.flattenObjectToCSSVariables({ kz: zenTheme })

const fixSassFunctions = (stylesheetNode: Node) => {
  const $ = createQueryWrapper(stylesheetNode)
  const variables = $("declaration").children("property").children("variable")

  const functions = $(
    n => typeof n.node.value === "string" && n.node.value in functionsOfInterest
  )

  const functionFirstParameters = functions.next().children(/(variable)/)

  /*   const functionFirstArgumentIdentifier = functionFirstParameters
    .children()
    .next("arguments")
    .children("identifier")
    .value() */

  // console.log(functionFirstParameters.get())
}

const runFile = (filePath: string) => {
  const sassFile = readFileSync(filePath).toString()
  const stylesheetTree = parse(sassFile)
  fixSassFunctions(stylesheetTree)
}

runFile("./test.scss")
