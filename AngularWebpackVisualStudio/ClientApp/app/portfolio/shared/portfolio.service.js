var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.portfolioUrl = 'api/portfolio/getItems';
        this.portfolioImgUrlBase = '';
    }
    PortfolioService.prototype.getItems = function () {
        var _this = this;
        if (this.items != null)
            return Promise.resolve(this.items);
        return this.http.get(this.portfolioUrl)
            .toPromise()
            .then(function (response) {
            var json = response.json();
            _this.portfolioImgUrlBase = json.baseImgUrl;
            return _this.items = json.items;
        })
            .catch(this.handleError);
    };
    PortfolioService.prototype.getItem = function (slug) {
        return this.getItems().then(function (items) { return items.find(function (x) { return x.slug === slug; }); });
    };
    PortfolioService.prototype.getImgSrc = function (imgName) {
        if (!/^(f|ht)tps?:\/\//i.test(imgName)) {
            return this.portfolioImgUrlBase + imgName;
        }
        return imgName;
    };
    PortfolioService.prototype.getDefaultImgSrc = function (item) {
        return this.getImgSrc(item.images[item.imageIndex]);
    };
    PortfolioService.prototype.handleError = function (error) {
        console.error('portfolioService - An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], PortfolioService);
export { PortfolioService };
//# sourceMappingURL=portfolio.service.js.map