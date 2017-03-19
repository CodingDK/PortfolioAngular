import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PortfolioComponent },
        { path: ':slug', component: PortfolioDetailComponent },
    ])],
    exports: [RouterModule]
})
export class PortfolioRoutingModule { }