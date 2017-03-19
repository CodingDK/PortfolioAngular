import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { StyleViewComponent } from './components/styleview.component';

const appRoutes: Routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: 'home', component: HomeComponent },
    //{ path: 'style-view', component: StyleViewComponent },
    { path: '**', redirectTo: '' } //TODO make 404 page
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }