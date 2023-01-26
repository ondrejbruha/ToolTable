class ToolTable extends HTMLElement{
    private rows: ToolRow[] = [new ToolRow([new ToolData(undefined)])];
    constructor(rowsInput: ToolRow[] | undefined) {
        super();
        if(rowsInput){
            this.rows = rowsInput;
        }
    }
    connectedCallback(): void{
        this.updateToolTable();
        this.makeDragDrop();
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
    makeDragDrop():void{
        let target: Element | null;
        for(let r of this.rows){
            r.ondragstart = (e) => {
                target = e.target instanceof Element ? e.target : null;
                if(target){

                }
            }
            r.ondragenter = (e)=>{
                e.preventDefault();
                let elem: Element | null = e.target && e.target instanceof Element && e.target instanceof ToolRow ? e.target.parentElement : null;
                console.log(elem);
                if(target && elem){
                    target.after(elem);
                }

            }
        }
    }
}
customElements.define("tool-table",ToolTable);