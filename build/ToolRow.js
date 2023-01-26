"use strict";
class ToolRow extends HTMLElement {
    constructor(list) {
        super();
        this.tableDataList = [new ToolData(undefined)];
        this.tableDataList = list ? list : [new ToolData(undefined)];
    }
    connectedCallback() {
        if (Array.isArray(this.tableDataList)) {
            for (let a of this.tableDataList) {
                this.appendChild(a);
            }
        }
        else {
            throw new Error("table data is not an array");
        }
        this.makeStyles();
    }
    get data() {
        return this.tableDataList;
    }
    set data(val) {
        this.tableDataList = val;
    }
    getColumnsCount() {
        return this.tableDataList.length;
    }
    getTableDataAt(i) {
        return this.tableDataList[i] ? this.tableDataList[i] : undefined;
    }
    makeStyles() {
        this.style.display = "flex";
        this.style.flexDirection = "row";
        this.style.flexWrap = "nowrap";
        this.style.justifyContent = "center";
        this.onmouseover = () => {
            this.style.backgroundColor = "var(--color-dark)";
        };
        this.onmouseleave = () => {
            this.style.backgroundColor = "transparent";
        };
        this.draggable = true;
    }
}
customElements.define("tool-row", ToolRow);
//# sourceMappingURL=ToolRow.js.map