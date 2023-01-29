class ToolTable extends HTMLElement {
    private rows: ToolRow[] = [new ToolRow([new ToolData(undefined)])];
    dragAndDrop: DragAndDrop;
    private maxRowCount: number = 0;
    private maxColumnCount: number = 0;
    constructor(rowsInput: ToolRow[] | undefined) {
        super();
        if (rowsInput) {
            this.rows = rowsInput;
        }
        this.dragAndDrop = new DragAndDrop();
    }
    connectedCallback(): void {
        this.updateToolTable();
    }
    updateToolTable(): void {
        this.innerHTML = "";
        for (let r of this.rows) {
            this.appendChild(r);
        }
        this.makeStyles();
    }
    getRowAt(i: number): ToolRow | undefined {
        return this.rows[i] ? this.rows[i] : undefined;
    }
    getRows(): ToolRow[] {
        return this.rows;
    }
    updateCounts():void{
        this.maxColumnCount = this.rows ? this.rows.length : 0;
        this.maxRowCount = 0;
        for(let r of this.rows){
            this.maxRowCount = Math.max(this.maxRowCount, r ? r.getCount() : 0);
        }
    }
    getRowCount(): number{
        return this.maxRowCount;
    }
    getColumnCount(): number{
        return this.maxColumnCount;
    }
    setRows(input: ToolRow[]): void {
        this.rows = input;
    }
    makeStyles(): void {
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.justifyContent = "center";
        this.style.flexWrap = "nowrap";
    }
}
customElements.define("tool-table", ToolTable);