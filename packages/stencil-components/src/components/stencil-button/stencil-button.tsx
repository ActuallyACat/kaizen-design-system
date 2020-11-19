import { Component, Prop, h } from "@stencil/core"
import classNames from "classnames"
import { SVGIcon } from "../types"

@Component({
  tag: "stencil-button",
  styleUrl: "stencil-button.scss",
  scoped: true,
})
export class StencilButton {
  @Prop() idString: string = "replace-me-with-a-real-id"
  @Prop() label: string = "Label"
  @Prop() destructive?: boolean = false
  @Prop() disabled?: boolean = false
  @Prop() reversed?: boolean = false
  @Prop() icon?: SVGIcon
  @Prop() href?: string
  @Prop() handleClick?: () => void
  @Prop() newTabAndIUnderstandTheAccessibilityImplications?: boolean
  @Prop() automationId?: string
  @Prop() analytics?: Analytics
  @Prop() ariaControls?: string
  @Prop() ariaDescribedBy?: string
  @Prop() ariaExpanded?: boolean
  @Prop() iconButton?: boolean = false
  @Prop() iconPosition?: "start" | "end"
  @Prop() primary?: boolean
  @Prop() secondary?: boolean
  @Prop() reverseColor?: "cluny" | "peach" | "seedling" | "wisteria" | "yuzu"

  renderContent() {
    return (
      <span class="content">
        {this.icon && this.iconPosition !== "end" && this.renderIcon(this.icon)}
        {(!this.icon || !this.iconButton) && (
          <span class="label">{this.label}</span>
        )}
        {this.icon && this.iconPosition === "end" && this.renderIcon(this.icon)}
        <slot name="additionalContent" />
      </span>
    )
  }

  renderIcon(icon: SVGIcon) {
    return (
      <span class="iconWrapper">
        <stencil-icon icon={icon} role="presentation"></stencil-icon>
      </span>
    )
  }

  buttonClass() {
    const variantClass =
      (this.destructive && "destructive") ||
      (this.primary && "primary") ||
      (this.secondary && "secondary")

    return classNames("button", variantClass, {
      reversed: this.reversed,
      iconButton: this.iconButton,
      reverseColorCluny: this.reverseColor === "cluny",
      reverseColorPeach: this.reverseColor === "peach",
      reverseColorSeedling: this.reverseColor === "seedling",
      reverseColorWisteria: this.reverseColor === "wisteria",
      reverseColorYuzu: this.reverseColor === "yuzu",
    })
  }

  render() {
    const label = this.icon && this.iconButton ? this.label : undefined
    // const customProps = getCustomProps(rest)

    return (
      <button
        id={this.idString}
        disabled={this.disabled}
        class={this.buttonClass()}
        data-automation-id={this.automationId}
        title={label}
        aria-controls={this.ariaControls}
        aria-describedby={this.ariaDescribedBy}
        aria-expanded={this.ariaExpanded}
        aria-label={label}
        data-analytics-click={this.analytics && this.analytics.eventName}
        data-analytics-properties={
          this.analytics && JSON.stringify(this.analytics.properties)
        }
      >
        {this.renderContent()}
      </button>
    )
  }
}

export type Analytics = {
  eventName: string
  properties: Record<string, unknown>
}
