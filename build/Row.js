"use strict";
class Row extends HTMLElement {
    constructor(list) {
        super();
        this.tableDataList = [new TableData(undefined)];
        this.tableDataList = list ? list : [new TableData(undefined)];
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
    }
}
customElements.define("tool-row", Row);
//# sourceMappingURL=Row.js.map