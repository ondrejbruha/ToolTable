"use strict";
class ToolTable extends HTMLElement {
    constructor(rowsInput) {
        super();
        this.rows = [new ToolRow([new ToolData(undefined)])];
        this.maxRowCount = 0;
        this.maxColumnCount = 0;
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
    updateCounts() {
        this.maxColumnCount = this.rows ? this.rows.length : 0;
        this.maxRowCount = 0;
        for (let r of this.rows) {
            this.maxRowCount = Math.max(this.maxRowCount, r ? r.getCount() : 0);
        }
    }
    getRowCount() {
        return this.maxRowCount;
    }
    getColumnCount() {
        return this.maxColumnCount;
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