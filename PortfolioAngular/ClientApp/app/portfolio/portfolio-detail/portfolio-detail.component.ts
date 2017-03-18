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
    //public defaultImg: string = "";

    constructor(private route: ActivatedRoute, private router: Router, private service: PortfolioService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getItem(params['slug']))
            .subscribe((item: PortfolioItem) => {
                this.item = item;
            });
    }
    
    getImgSrc(index): string {
        if (this.item == null || this.item.images == null) return;

        return this.service.getImgSrc(this.item.images[index]);
    }

    showMoreImages(): boolean {
        return this.item != null && this.item.images != null && this.item.images.length > 1;
    }

    //gallery stuff
    public isOpen: boolean = false;
    public currentIndex: number = 0;

    openGallery(index: number): void {
        this.isOpen = true;
        this.setCurrentIndex(index);
        this.setClassOnBody(true);
    }

    closeGallery(): void {
        this.isOpen = false;
        this.setClassOnBody(false);
    }

    private setClassOnBody(add:boolean): void {
        if (typeof document === "undefined") return;
        let list = document.querySelector('body').classList;
        if (add) {
            list.add('modal-open');
        } else {
            list.remove('modal-open');
        }
    }

    moveSlide(forward: boolean): void {
        if (this.currentIndex === 0 && !forward) {
            this.currentIndex = this.item.images.length-1;
        } else if (forward && this.currentIndex === this.item.images.length-1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += (forward) ? 1 : -1;
        }
    }

    setCurrentIndex(index: number): void {
        this.currentIndex = index;
    }
}