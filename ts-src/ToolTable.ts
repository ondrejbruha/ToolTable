class ToolTable extends HTMLElement{
    private rows: Row[] = [new Row([new TableData(undefined)])];
    constructor(rowsInput: Row[] | undefined) {
        super();
        if(rowsInput){
            this.rows = rowsInput;
        }
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
    getRowAt(i: number): Row | undefined{
        return this.rows[i] ? this.rows[i]: undefined;
    }
    getRows(): Row[]{
        return this.rows;
    }
    setRows(input: Row[]): void{
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