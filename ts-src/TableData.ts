class TableData extends HTMLElement{
    private data: any;
    constructor(input: any) {
        super();
        if(typeof input === "string" || typeof input === "number"){
            this.data = input;
        }
    }
    connectedCallback(){
        if(!this.data){
            this.data = this.hasAttribute("data") ? this.getAttribute("data") : "";
        }
        if(Boolean(this.data)){
            this.makeContentFromData(this.data);
        }

    }
    private makeContentFromData(data: string | number ): void{
        let type: string = typeof data;
        if(type === "string"){
            this.innerHTML = data.toString();
        }
        else{
            this.innerHTML = data.toLocaleString();
        }

    }
    clearContent(): void{
        this.innerHTML = "";
    }
}
customElements.define("table-data", TableData);