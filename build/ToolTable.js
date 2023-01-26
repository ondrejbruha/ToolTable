"use strict";
class ToolTable extends HTMLElement {
    constructor(rowsInput) {
        super();
        this.rows = [new ToolRow([new ToolData(undefined)])];
        if (rowsInput) {
            this.rows = rowsInput;
        }
    }
    connectedCallback() {
        this.updateToolTable();
        this.makeDragDrop();
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
    makeDragDrop() {
        let target;
        for (let r of this.rows) {
            r.ondragstart = (e) => {
                target = e.target instanceof Element ? e.target : null;
                if (target) {
                }
            };
            r.ondragenter = (e) => {
                e.preventDefault();
                let elem = e.target && e.target instanceof Element && e.target instanceof ToolRow ? e.target.parentElement : null;
                console.log(elem);
                if (target && elem) {
                    target.after(elem);
                }
            };
        }
    }
}
customElements.define("tool-table", ToolTable);
//# sourceMappingURL=ToolTable.js.map