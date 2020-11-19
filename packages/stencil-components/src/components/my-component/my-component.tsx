import { Component, Prop, h } from "@stencil/core"
import { format } from "../../utils/utils"

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string = ""

  /**
   * The middle name
   */
  @Prop() middle: string = ""

  /**
   * The last name
   */
  @Prop() last: string = ""

  render() {
    return (
      <div>
        Hello, world! I'm {this.last}. Here's a {this.first} superficial change
      </div>
    )
  }

  private getText(): string {
    return format(this.first, this.middle, this.last)
  }
}
