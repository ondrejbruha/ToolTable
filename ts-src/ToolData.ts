class ToolData extends HTMLElement {
    private data: any;
    constructor(input: any) {
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
    private makeContentFromData(data: string | number): void {
        let type: string = typeof data;
        if (type === "string") {
            this.innerHTML = data.toString();
        }
        else {
            this.innerHTML = data.toLocaleString();
        }

    }
    clearContent(): void {
        this.innerHTML = "";
    }
    appendContent(val: Node): void {
        this.clearContent();
        this.appendChild(val);
    }
    makeStyles(): void {
        this.style.margin = "5px";
        this.style.padding = "0.5rem";
        this.style.border = "1px solid black";
    }
}
customElements.define("tool-data", ToolData);