class Row extends HTMLElement{
    private tableDataList: TableData[] = [new TableData(undefined)];
    constructor(list: TableData[]) {
        super();
        this.tableDataList = list ? list : [new TableData(undefined)];
    }
    connectedCallback(){
        if(Array.isArray(this.tableDataList)){
            for(let a of this.tableDataList){
                this.appendChild(a);
            }
        }
        else {
            throw new Error("table data is not an array")
        }
        this.makeStyles();
    }
    get data(): TableData[]{
        return this.tableDataList;
    }
    set data(val: TableData[]) {
        this.tableDataList = val;
    }
    getColumnsCount(): number{
        return this.tableDataList.length;
    }
    getTableDataAt(i: number):any{
        return this.tableDataList[i] ? this.tableDataList[i] : undefined;
    }
    makeStyles():void{
        this.style.display = "flex";
        this.style.flexDirection = "row";
        this.style.flexWrap = "nowrap";
        this.style.justifyContent = "center";
    }
}
customElements.define("tool-row", Row);