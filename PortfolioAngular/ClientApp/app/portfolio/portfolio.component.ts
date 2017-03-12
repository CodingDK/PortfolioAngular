import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from './shared/portfolio-item.model';
import { putItemsInRows } from '../shared/utils.functions';
import { PortfolioService } from './shared/portfolio.service';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

    public rows: PortfolioItem[][];

    constructor(private service: PortfolioService) {
        
    }

    ngOnInit(): void {
        this.getRows();
    }

    getRows(): void {
        this.service.getItems().then(items => this.rows = putItemsInRows(items, 3));
    }
}