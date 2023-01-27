"use strict";
class ToolTable extends HTMLElement {
    constructor(rowsInput) {
        super();
        this.rows = [new ToolRow([new ToolData(undefined)])];
        if (rowsInput) {
            this.rows = rowsInput;
        }
        this.dragAndDrop = new DragAndDrop();
    }
    connectedCallback() {
        this.updateToolTable();
    }
    updateToolTable() {
        this.innerHTML = "";
        for (let r of this.rows) {
            this.appendChild(r);
        }
        this.makeStyles();
    }
    getRowAt(i) {
        return this.rows[i] ? this.rows[i] : undefined;
    }
    getRows() {
        return this.rows;
    }
    setRows(input) {
        this.rows = input;
    }
    makeStyles() {
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.justifyContent = "center";
        this.style.flexWrap = "nowrap";
    }
}
customElements.define("tool-table", ToolTable);
//# sourceMappingURL=ToolTable.js.map