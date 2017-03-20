export function putItemsInRows(items, itemsPrRow) {
    var rows = new Array();
    var row;
    items.forEach(function (item, index) {
        if (index % itemsPrRow === 0) {
            row = new Array();
            rows.push(row);
        }
        row.push(item);
    });
    return rows;
}
//# sourceMappingURL=utils.functions.js.map