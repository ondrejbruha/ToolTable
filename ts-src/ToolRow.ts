class ToolRow extends HTMLElement {
    private tableDataList: ToolData[] = [new ToolData(undefined)];
    private dataCount: number = 0;
    constructor(list: ToolData[]) {
        super();
        this.tableDataList = list ? list : [new ToolData(undefined)];
    }
    connectedCallback() {
        if (Array.isArray(this.tableDataList)) {
            for (let a of this.tableDataList) {
                this.appendChild(a);
            }
        }
        else {
            throw new Error("table data is not an array")
        }
        this.makeStyles();
        this.makeDragDrop();
        this.updateCount();
    }
    get data(): ToolData[] {
        return this.tableDataList;
    }
    updateCount(): void{
        this.dataCount = 0;
        for(let t of this.tableDataList){
            this.dataCount++;
        }
    }
    getCount():number{
        return this.dataCount;
    }
    set data(val: ToolData[]) {
        this.tableDataList = val;
    }
    getColumnsCount(): number {
        return this.tableDataList.length;
    }
    getTableDataAt(i: number): any {
        return this.tableDataList[i] ? this.tableDataList[i] : undefined;
    }
    makeStyles(): void {
        this.style.display = "flex";
        this.style.flexDirection = "row";
        this.style.flexWrap = "nowrap";
        this.style.justifyContent = "center";
        this.onmouseover = () => {
            this.style.backgroundColor = "var(--color-dark)";
        }
        this.onmouseleave = () => {
            this.style.backgroundColor = "transparent";
        }
        this.draggable = true;
    }
    makeDragDrop(): void {
        this.ondragstart = (e) => {
            if (e.target && e.target instanceof ToolRow) {
                DragAndDrop.setRow(e.target);
            }
        }
        this.ondragover = (e) => {
            let target: ToolRow | undefined = e.target && e.target instanceof ToolRow ? e.target : undefined;
            let row: ToolRow | undefined = DragAndDrop.getRow() ? DragAndDrop.getRow() : undefined;
            if (target && row) {
                this.parentElement?.firstChild === target ? target.insertAdjacentElement("beforebegin", row) : target.insertAdjacentElement("afterend", row);
            }
        }
    }
}
customElements.define("tool-row", ToolRow);