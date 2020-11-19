var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from "@stencil/core";
import classNames from "classnames";
let StencilButton = class StencilButton {
    constructor() {
        this.idString = "replace-me-with-a-real-id";
        this.label = "Label";
        this.destructive = false;
        this.disabled = false;
        this.reversed = false;
        this.iconButton = false;
    }
    renderContent() {
        return (<span class="content">
        {this.icon && this.iconPosition !== "end" && this.renderIcon()}
        {(!this.icon || !this.iconButton) && (<span class="label">{this.label}</span>)}
        {this.icon && this.iconPosition === "end" && this.renderIcon()}
        <slot name="additionalContent"/>
      </span>);
    }
    renderIcon() {
        return (<span class="iconWrapper">

      </span>);
    }
    buttonClass() {
        const variantClass = (this.destructive && "destructive") ||
            (this.primary && "primary") ||
            (this.secondary && "secondary");
        return classNames("button", variantClass, {
            reversed: this.reversed,
            iconButton: this.iconButton,
            reverseColorCluny: this.reverseColor === "cluny",
            reverseColorPeach: this.reverseColor === "peach",
            reverseColorSeedling: this.reverseColor === "seedling",
            reverseColorWisteria: this.reverseColor === "wisteria",
            reverseColorYuzu: this.reverseColor === "yuzu",
        });
    }
    render() {
        const label = this.icon && this.iconButton ? this.label : undefined;
        // const customProps = getCustomProps(rest)
        return (<button id={this.idString} disabled={this.disabled} class={this.buttonClass()} data-automation-id={this.automationId} title={label} aria-controls={this.ariaControls} aria-describedby={this.ariaDescribedBy} aria-expanded={this.ariaExpanded} aria-label={label} data-analytics-click={this.analytics && this.analytics.eventName} data-analytics-properties={this.analytics && JSON.stringify(this.analytics.properties)}>
        {this.renderContent()}
      </button>);
    }
};
__decorate([
    Prop()
], StencilButton.prototype, "idString", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "label", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "destructive", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "disabled", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "reversed", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "icon", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "href", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "handleClick", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "newTabAndIUnderstandTheAccessibilityImplications", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "automationId", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "analytics", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "ariaControls", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "ariaDescribedBy", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "ariaExpanded", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "iconButton", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "iconPosition", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "primary", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "secondary", void 0);
__decorate([
    Prop()
], StencilButton.prototype, "reverseColor", void 0);
StencilButton = __decorate([
    Component({
        tag: "stencil-button",
        styleUrl: "stencil-button.scss",
        scoped: true,
    })
], StencilButton);
export { StencilButton };
