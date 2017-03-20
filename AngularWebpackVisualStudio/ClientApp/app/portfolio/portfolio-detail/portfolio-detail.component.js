var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioItem } from '../shared/portfolio-item.model';
import { PortfolioService } from '../shared/portfolio.service';
var PortfolioDetailComponent = (function () {
    function PortfolioDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.item = new PortfolioItem();
        this.showLoader = false;
        this.isOpen = false;
        this.currentIndex = 0;
    }
    PortfolioDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader = true;
        this.route.params
            .switchMap(function (params) { return _this.service.getItem(params['slug']); })
            .subscribe(function (item) {
            _this.showLoader = false;
            if (item == null) {
                _this.router.navigate(['/']);
            }
            _this.item = item;
        });
    };
    PortfolioDetailComponent.prototype.getImgSrc = function (index) {
        if (this.item == null || this.item.images == null)
            return;
        return this.service.getImgSrc(this.item.images[index]);
    };
    PortfolioDetailComponent.prototype.showMoreImages = function () {
        return this.item != null && this.item.images != null && this.item.images.length > 1;
    };
    PortfolioDetailComponent.prototype.isImgNotNull = function (index) {
        return this.getImgSrc(index) != null;
    };
    PortfolioDetailComponent.prototype.openGallery = function (index) {
        this.isOpen = true;
        this.setCurrentIndex(index);
        this.setClassOnBody(true);
    };
    PortfolioDetailComponent.prototype.closeGallery = function () {
        this.isOpen = false;
        this.setClassOnBody(false);
    };
    PortfolioDetailComponent.prototype.setClassOnBody = function (add) {
        if (typeof document === 'undefined')
            return;
        var list = document.querySelector('body').classList;
        if (add) {
            list.add('modal-open');
        }
        else {
            list.remove('modal-open');
        }
    };
    PortfolioDetailComponent.prototype.moveSlide = function (forward) {
        if (this.currentIndex === 0 && !forward) {
            this.currentIndex = this.item.images.length - 1;
        }
        else if (forward && this.currentIndex === this.item.images.length - 1) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex += (forward) ? 1 : -1;
        }
    };
    PortfolioDetailComponent.prototype.setCurrentIndex = function (index) {
        this.currentIndex = index;
    };
    return PortfolioDetailComponent;
}());
PortfolioDetailComponent = __decorate([
    Component({
        selector: 'portfolio-detail',
        templateUrl: './portfolio-detail.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, PortfolioService])
], PortfolioDetailComponent);
export { PortfolioDetailComponent };
//# sourceMappingURL=portfolio-detail.component.js.map