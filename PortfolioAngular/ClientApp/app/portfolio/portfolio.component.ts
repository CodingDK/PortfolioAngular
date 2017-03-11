import { Component } from '@angular/core';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {
    private items: PortfolioItem[] = [
        new PortfolioItem(1, "first title", "first description"),
        new PortfolioItem(2, "second title", "second description"),
        new PortfolioItem(3, "third title", "third description"),
        new PortfolioItem(4, "fourth title", "fourth description"),
        new PortfolioItem(5, "5 title", "5 description"),
        new PortfolioItem(6, "6 title", "6 description"),
        new PortfolioItem(7, "7 title", "7 description")
    ]
    public rows: Row<PortfolioItem>[];

    constructor() {
        this.putItemsInRows();
    }

    private putItemsInRows(): void {
        this.rows = [];
        let row: Row<PortfolioItem>;
        this.items.forEach((item, index) => {
            if (index % 3 === 0) {
                row = new Row<PortfolioItem>();
                this.rows.push(row);
            }
            row.items.push(item);
        });
    }
}
class Row<T> {
    //TODO Refactor these classes to other files
    public items: T[] = new Array<T>();
}

class PortfolioItem {
    public id: number;
    public title: string;
    public slug: string;
    public image: string;
    public description: string;
    constructor(id: number, title: string, description: string) {
        this.title = title;
        this.slug = id.toString();
        this.image = "http://placehold.it/700x400";
        this.description = description;
    }
}