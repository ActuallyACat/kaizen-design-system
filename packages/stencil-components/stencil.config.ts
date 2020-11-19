import { Config } from "@stencil/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import { reactOutputTarget } from "@stencil/react-output-target"
import { sass } from "@stencil/sass"

export const config: Config = {
  namespace: "component-library",
  plugins: [sass()],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements-bundle",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: "../src/components",
      proxiesFile: "./components/index.ts",
    }),
  ],
}
