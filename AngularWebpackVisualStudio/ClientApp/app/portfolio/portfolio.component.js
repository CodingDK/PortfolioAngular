var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { putItemsInRows } from '../shared/utils.functions';
import { PortfolioService } from './shared/portfolio.service';
var PortfolioComponent = (function () {
    function PortfolioComponent(service) {
        this.service = service;
        this.showLoader = false;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getRows();
    };
    PortfolioComponent.prototype.getRows = function () {
        var _this = this;
        this.showLoader = true;
        this.service.getItems().then(function (items) {
            _this.showLoader = false;
            _this.rows = putItemsInRows(items, 3);
        });
    };
    PortfolioComponent.prototype.getImgSrc = function (item) {
        return this.service.getDefaultImgSrc(item);
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    Component({
        selector: 'portfolio',
        templateUrl: './portfolio.component.html',
    }),
    __metadata("design:paramtypes", [PortfolioService])
], PortfolioComponent);
export { PortfolioComponent };
//# sourceMappingURL=portfolio.component.js.map