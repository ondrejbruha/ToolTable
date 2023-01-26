"use strict";
class ToolData extends HTMLElement {
    constructor(input) {
        super();
        if (typeof input === "string" || typeof input === "number") {
            this.data = input;
        }
    }
    connectedCallback() {
        if (!this.data) {
            this.data = this.hasAttribute("data") ? this.getAttribute("data") : "";
        }
        if (Boolean(this.data)) {
            this.makeContentFromData(this.data);
        }
        this.makeStyles();
    }
    makeContentFromData(data) {
        let type = typeof data;
        if (type === "string") {
            this.innerHTML = data.toString();
        }
        else {
            this.innerHTML = data.toLocaleString();
        }
    }
    clearContent() {
        this.innerHTML = "";
    }
    appendContent(val) {
        this.clearContent();
        this.appendChild(val);
    }
    makeStyles() {
        this.style.margin = "5px";
        this.style.padding = "0.5rem";
        this.style.border = "1px solid black";
    }
}
customElements.define("tool-data", ToolData);
//# sourceMappingURL=ToolData.js.map