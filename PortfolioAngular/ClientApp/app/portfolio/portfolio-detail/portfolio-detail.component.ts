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

    public item: PortfolioItem = new PortfolioItem();
    public defaultImg: string = "";

    constructor(private route: ActivatedRoute, private router: Router, private service: PortfolioService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getItem(params['slug']))
            .subscribe((item: PortfolioItem) => {
                this.item = item;
                this.defaultImg = this.service.getDefaultImgSrc(item);
            });
    }
    
    getImgSrc(imgName) : string {
        return this.service.getImgSrc(imgName);
    }

    getMoreImageUrls(): string[] {
        if (this.item == null || this.item.images == null) return;
        let arr = [];
        
        this.item.images.forEach((value, index) => {
            let src = this.getImgSrc(value);
            if (src === this.defaultImg) return;
            arr.push(this.getImgSrc(value));
        })
        return arr;
    }

    changeDefaultImg(imgUrl: string): void {
        this.defaultImg = imgUrl;
    }

    showMoreImages(): boolean {
        return this.item != null && this.item.images != null && this.item.images.length > 1;
    }
}