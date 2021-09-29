import path from "path"
import fs from "fs"
import glob from "glob"
import startCase from "lodash.startcase"
import svgr, { TemplateFunc } from "@svgr/core"
import { camelCase } from "lodash.camelcase"

const ASSETS_RAW_DIR = path.join(__dirname, "./icons-raw/")
const ASSETS_COMPILED_DIR = path.join(__dirname, "./icons")
const uncompiledSvgList = glob.sync(`${ASSETS_RAW_DIR}/*.svg`)

const svgTemplate: TemplateFunc = (
  { template },
  opts,
  { imports, componentName, jsx }
) => (template as any).smart({ plugins: ["typescript"] }).ast`
        ${imports}
        import { withAccessibleIcon, withAccessibleIconProps } from "../Base"
        ${"\n"}
        const ${componentName} = (props: withAccessibleIconProps) => ${jsx};
        export default withAccessibleIcon(${componentName})
    `

uncompiledSvgList.forEach(async svgPath => {
  const [rawSvgName,] = path.parse(svgPath).name.split(".");
  const svgName = startCase(camelCase(rawSvgName))
  const svgContents = await fs.readFileSync(svgPath, { encoding: "utf8" });

  const componentCode = svgr.sync(
    svgContents,
    {
      template: svgTemplate,
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier"
      ],
      // Replace hardcoded colors with `currentColor`
      svgoConfig: {
        plugins: [{ convertColors: { currentColor: true } }],
      },
    },
    { componentName: svgName },
  );

  fs.writeFileSync(
    `${ASSETS_COMPILED_DIR}/${svgName}.tsx`,
    componentCode
  );
})

