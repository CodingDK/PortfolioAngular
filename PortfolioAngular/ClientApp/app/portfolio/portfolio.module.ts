import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';


@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioDetailComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        PortfolioRoutingModule
    ]
})
export class PortfolioModule {
}
