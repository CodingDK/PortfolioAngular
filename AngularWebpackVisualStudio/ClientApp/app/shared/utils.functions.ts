export function putItemsInRows<T>(items: T[], itemsPrRow: number): T[][] {
    const rows = new Array<T[]>();
    let row: T[];
    items.forEach((item, index) => {
        if (index % itemsPrRow === 0) {
            row = new Array<T>();
            rows.push(row);
        }
        row.push(item);
    });
    return rows;
}