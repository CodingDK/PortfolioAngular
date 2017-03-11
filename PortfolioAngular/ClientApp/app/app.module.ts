import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { CollapseModule } from 'ng2-bootstrap/collapse';

import { AppComponent } from './app.component'
import { NavMenuComponent } from './components/navmenu.component';
import { HomeComponent } from './components/home.component';
import { StyleViewComponent } from './components/styleview.component';

import { AppRoutingModule } from './app-routing.module';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        StyleViewComponent,
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        CollapseModule,
        PortfolioModule,
        AppRoutingModule // Must be last import. So Rounting childs works
    ]
})
export class AppModule {
}
