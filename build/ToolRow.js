"use strict";
class ToolRow extends HTMLElement {
    constructor(list) {
        super();
        this.tableDataList = [new ToolData(undefined)];
        this.dataCount = 0;
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
        this.makeDragDrop();
        this.updateCount();
    }
    get data() {
        return this.tableDataList;
    }
    updateCount() {
        this.dataCount = 0;
        for (let t of this.tableDataList) {
            this.dataCount++;
        }
    }
    getCount() {
        return this.dataCount;
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
    makeDragDrop() {
        this.ondragstart = (e) => {
            if (e.target && e.target instanceof ToolRow) {
                DragAndDrop.setRow(e.target);
            }
        };
        this.ondragover = (e) => {
            var _a;
            let target = e.target && e.target instanceof ToolRow ? e.target : undefined;
            let row = DragAndDrop.getRow() ? DragAndDrop.getRow() : undefined;
            if (target && row) {
                ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === target ? target.insertAdjacentElement("beforebegin", row) : target.insertAdjacentElement("afterend", row);
            }
        };
    }
}
customElements.define("tool-row", ToolRow);
//# sourceMappingURL=ToolRow.js.map