import { NgModule } from '@angular/core';
//import { UniversalModule } from 'angular2-universal';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioService } from './shared/portfolio.service';

import { PortfolioRoutingModule } from './portfolio-routing.module';


@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioDetailComponent
    ],
    imports: [
        CommonModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        HttpModule,
        PortfolioRoutingModule
    ],
    providers: [
        PortfolioService
    ]
})
export class PortfolioModule {
}
