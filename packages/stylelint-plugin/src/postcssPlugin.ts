import { Plugin, PluginCreator } from "postcss"
import { codemodOnAst } from "./codemod"

type Opts = {
  fix?: boolean
}
export const deprecatedTokensPlugin: PluginCreator<Opts> = (opts?: Opts) =>
  ({
    postcssPlugin: "kaizen-deprecated-tokens",
    Root: (root, { result }) => {
      const language = /\.less$/.test(root.source?.input.file || "")
        ? "less"
        : "scss"
      codemodOnAst(root, {
        language,
        fix: opts?.fix || false,
        reporter: ({ message, node }) => {
          node.warn(result, message)
        },
      })
    },
  } as Plugin)

deprecatedTokensPlugin.postcss = true
