import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { UniversalModule } from 'angular2-universal';
//import { CollapseModule } from 'ng2-bootstrap/collapse';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

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
        BrowserModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        CommonModule,
        HttpModule,
        //CollapseModule,
        PortfolioModule,
        AppRoutingModule // Must be last import. So Rounting childs works
    ]
})
export class AppModule {
}
