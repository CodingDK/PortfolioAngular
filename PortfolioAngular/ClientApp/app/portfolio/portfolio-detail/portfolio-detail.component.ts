import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PortfolioItem } from '../shared/portfolio-item.model';
import { PortfolioService } from '../shared/portfolio.service';

@Component({
    selector: 'portfolio-detail',
    templateUrl: './portfolio-detail.component.html'
})
export class PortfolioDetailComponent implements OnInit {

    public item: PortfolioItem;

    constructor(private route: ActivatedRoute, private router: Router, private service: PortfolioService) {
        //this.item = service.getItem("122");
        //console.log("item", this.item, "slug", slug);
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getItem(params['slug']))
            .subscribe((item: PortfolioItem) => this.item = item);
    }
}