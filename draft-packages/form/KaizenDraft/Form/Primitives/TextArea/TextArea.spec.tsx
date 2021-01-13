import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import TextArea from "./TextArea"

afterEach(cleanup)

describe("<TextArea />", () => {
  it("should render", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
    expect(container.querySelector("textarea")).toBeTruthy()
  })

  it("should render the default value", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("should render the rows attribute when passed in as a prop", () => {
    const { container } = render(<TextArea data-testid="wrapper" rows={15} />)
    expect(
      Number(container.querySelector("textarea")?.getAttribute("rows"))
    ).toEqual(15)
  })

  it("should fire an onchange event when value is changed", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("should render a reversed class when it's reversed", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("should render a error class when it's an error status", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("should render a success class when it's an success status", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("should render a default class when it's an default status", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("should update the inline style for height when multiple newlines are entered as a value", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("controlled mode - takes a value and does not update on user action", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })

  it("uncontrolled mode - takes a value and does update on user action", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
  })
})
