class DragAndDrop {
    private static row: ToolRow | undefined;
    constructor() {
        DragAndDrop.row = undefined;
    }
    static setRow(input: Element): void {
        if (input instanceof ToolRow) {
            DragAndDrop.row = input;
        }
    }
    static getRow(): ToolRow | undefined {
        return DragAndDrop.row;
    }
}