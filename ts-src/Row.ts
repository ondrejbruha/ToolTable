class Row extends HTMLElement{
    private tableDataList: TableData[] | undefined;
    constructor() {
        super();
    }
    connectedCallback(){
        this.tableDataList = [new TableData(undefined), new TableData("ahoj svete")];
        this.appendChild(this.tableDataList[0]);
        this.appendChild(this.tableDataList[1]);
    }
}
customElements.define("tool-row", Row);