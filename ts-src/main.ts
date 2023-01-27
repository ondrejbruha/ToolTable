function main() {
    let table = new ToolTable(undefined);
    let rows = [];
    for (let i = 0; i < 10; i++) {
        let data = [];
        for (let j = 0; j < i + 2; j++) {
            data.push(new ToolData(i * j));
        }
        rows.push(new ToolRow(data));
    }
    table.setRows(rows);

    document.body.appendChild(table);
}