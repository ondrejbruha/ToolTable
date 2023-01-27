"use strict";
class DragAndDrop {
    constructor() {
        DragAndDrop.row = undefined;
    }
    static setRow(input) {
        if (input instanceof ToolRow) {
            DragAndDrop.row = input;
        }
    }
    static getRow() {
        return DragAndDrop.row;
    }
}
//# sourceMappingURL=DragAndDrop.js.map