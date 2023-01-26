"use strict";
class Row extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.tableDataList = [new TableData(undefined), new TableData("ahoj svete")];
        this.appendChild(this.tableDataList[0]);
        this.appendChild(this.tableDataList[1]);
    }
}
customElements.define("tool-row", Row);
//# sourceMappingURL=Row.js.map