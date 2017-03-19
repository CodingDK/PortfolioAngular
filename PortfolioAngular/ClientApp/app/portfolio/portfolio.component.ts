import { Component, OnInit, trigger, transition, animate, style } from '@angular/core';
import { PortfolioItem } from './shared/portfolio-item.model';
import { putItemsInRows } from '../shared/utils.functions';
import { PortfolioService } from './shared/portfolio.service';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    /*animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ opacity: 1, transform: 'scale(0.0)' }),
                    animate('500ms', style({ opacity: 1, transform: 'scale(1.0)' }))
                ])//,
                //transition(':leave', [
                //    style({ opacity: 1, transform: 'scale(1.0)' }),
                //    animate('500ms', style({ opacity: 1, transform: 'scale(0.0)' }))
                //])
            ]
        )
    ]*/
})
export class PortfolioComponent implements OnInit {

    public rows: PortfolioItem[][];

    constructor(private service: PortfolioService) {
        
    }

    ngOnInit(): void {
        this.getRows();
    }

    private getRows(): void {
        this.service.getItems().then(items => {
            this.rows = putItemsInRows(items, 3);
        });
            //setTimeout(() => { this.rows = putItemsInRows(items, 3) }, 500) });
    }

    getImgSrc(item: PortfolioItem) {
        return this.service.getDefaultImgSrc(item);
    }
}