declare module "sast" {
  import { Node } from "unist"

  export function parseFile(path: string): Promise<Node>
}
