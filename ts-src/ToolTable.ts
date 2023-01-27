class ToolTable extends HTMLElement{
    private rows: ToolRow[] = [new ToolRow([new ToolData(undefined)])];
    dragAndDrop: DragAndDrop;
    constructor(rowsInput: ToolRow[] | undefined) {
        super();
        if(rowsInput){
            this.rows = rowsInput;
        }
        this.dragAndDrop = new DragAndDrop();
    }
    connectedCallback(): void{
        this.updateToolTable();
    }
    updateToolTable(): void {
        this.innerHTML = "";
        for(let r of this.rows){
            this.appendChild(r);
        }
        this.makeStyles();
    }
    getRowAt(i: number): ToolRow | undefined{
        return this.rows[i] ? this.rows[i]: undefined;
    }
    getRows(): ToolRow[]{
        return this.rows;
    }
    setRows(input: ToolRow[]): void{
        this.rows = input;
    }
    makeStyles():void{
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.justifyContent = "center";
        this.style.flexWrap = "nowrap";
    }
}
customElements.define("tool-table",ToolTable);