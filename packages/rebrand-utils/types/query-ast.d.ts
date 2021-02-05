/* eslint-disable max-classes-per-file */
declare module "query-ast" {
  import { Node } from "scss-parser"

  type Selector<Node> = string | RegExp | ((n: NodeWrapper<Node>) => boolean)
  type JSON = Record<string, unknown>
  class NodeWrapper<Node> {
    node: Node
    parent?: NodeWrapper<Node>
    children: Array<NodeWrapper<Node>>
    static isNodeWrapper = (node: unknown): node is NodeWrapper<Node> =>
      NodeWrapper
    toJSON(): JSON
  }

  /** Note: Some of the documentation comments we're auto generated so there may be some formatting issues */
  class QueryWrapper<Node> {
    nodes: Array<NodeWrapper<Node>>
    /** "Insert a node after each node in the set of matched nodes" **/
    after(node: Node): QueryWrapper<Node>
    /** "Insert a node before each node in the set of matched nodes" **/
    before(node: Node): QueryWrapper<Node>
    /** "Get the children of each node in the set of matched nodes,↵optionally filtered by a selector" **/
    children(selector?: Selector<Node>): QueryWrapper<Node>
    /** "For each node in the set of matched nodes, get the first node that matches↵the selector by testing the node itself and traversing up through its ancestors" **/
    closest(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Combine the nodes of two QueryWrappers" **/
    concat(queryWrapper: QueryWrapper<Node>): QueryWrapper<Node>
    /** "Reduce the set of matched nodes to the one at the specified index" **/
    eq(index: number): QueryWrapper<Node>
    /** "Reduce the set of matched nodes to those that match the selector" **/
    filter(selector: Selector<Node>): QueryWrapper<Node>
    /** "Get the descendants of each node in the set of matched nodes,↵optionally filtered by a selector" **/
    find(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Reduce the set of matched nodes to the first in the set." **/
    first(): QueryWrapper<Node>
    /** "Return the wrapper as a JSON node or array of JSON nodes" **/
    get(index?: number): Node | Node[]
    /** "Reduce the set of matched nodes to those that have a descendant↵that matches the selector" **/
    has(selector: Selector<Node>): QueryWrapper<Node>
    /** "Reduce the set of matched nodes to those that have a parent↵that matches the selector" **/
    hasParent(selector: Selector<Node>): QueryWrapper<Node>
    /** "Reduce the set of matched nodes to those that have an ancestor↵that matches the selector" **/
    hasParents(selector: Selector<Node>): QueryWrapper<Node>
    /** "Search for a given node in the set of matched nodes.
     * If no argument is passed, the return value is an integer indicating↵the position of the first node within the Wrapper relative to its sibling nodes.
     * If called on a collection of nodes and a NodeWrapper is passed in, the return value↵is an integer indicating the position of the passed NodeWrapper relative to the original collection.
     * If a selector is passed as an argument, the return value is an integer↵indicating the position of the first node within the Wrapper relative↵to the nodes matched by the selector.
     * If the selctor doesn't match any nodes, it will return -1.**/
    index(node?: NodeWrapper | Selector<Node>): number
    /** "Reduce the set of matched nodes to the final one in the set" **/
    last(): QueryWrapper<Node>
    /** "Return the number of nodes in the wrapper" **/
    length(): number
    /** "Map the set of matched nodes" **/
    map<MappedType>(
      fn: (nodeWrapper: NodeWrapper<Node>) => MappedType
    ): MappedType[]
    /** "Get the immediately following sibling of each node in the set of matched nodes,↵optionally filtered by a selector" **/
    next(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Get all following siblings of each node in the set of matched nodes,↵optionally filtered by a selector" **/
    nextAll(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Get the parent of each nodes in the current set of matched nodess,↵optionally filtered by a selector" **/
    parent(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Get the ancestors of each nodes in the current set of matched nodess,↵optionally filtered by a selector" **/
    parents(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Get the ancestors of each node in the set of matched nodes,↵up to but not including the node matched by the selector" **/
    parentsUntil(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Get the immediately preceding sibling of each node in the set of matched nodes,↵optionally filtered by a selector" **/
    prev(selector?: Selector<Node>): QueryWrapper<Node>
    /** "Get all preceding siblings of each node in the set of matched nodes,↵optionally filtered by a selector" **/
    prevAll(selector?: Selector<Node>): QueryWrapper<Node>
    /** Reduce the set of matched nodes */
    reduce<Accumulator>(
      fn: (nodeWrapper: NodeWrapper, accumulator: Accumulator) => Accumulator,
      initial: Accumulator
    ): Accumulator
    /** Remove the set of matched nodes */
    remove(): QueryWrapper<Node>
    /** Replace each node in the set of matched nodes by returning a new node for each node that will be replaced */
    replace(
      fn: (node: NodeWraper<Node>) => NodeWrapper<Node>
    ): QueryWrapper<Node>
    /** Get the combined string contents of each node in the set of matched nodes, including their descendants */
    value(): string
  }

  export default function createQueryWrapper<Node>(
    node: Node
  ): (selector: Selector<Node>) => QueryWrapper<Node>
}
