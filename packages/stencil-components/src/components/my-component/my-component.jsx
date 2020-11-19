var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from "@stencil/core";
import { format } from "../../utils/utils";
let MyComponent = class MyComponent {
    constructor() {
        /**
         * The first name
         */
        this.first = "";
        /**
         * The middle name
         */
        this.middle = "";
        /**
         * The last name
         */
        this.last = "";
    }
    render() {
        return <div>Hello, world! I'm {this.last}. Here's a {this.first} superficial change</div>;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
};
__decorate([
    Prop()
], MyComponent.prototype, "first", void 0);
__decorate([
    Prop()
], MyComponent.prototype, "middle", void 0);
__decorate([
    Prop()
], MyComponent.prototype, "last", void 0);
MyComponent = __decorate([
    Component({
        tag: "my-component",
        styleUrl: "my-component.css",
        shadow: true,
    })
], MyComponent);
export { MyComponent };
