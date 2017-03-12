import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';

import { PortfolioItem } from "../shared/portfolio-item.model";

@Injectable()
export class PortfolioService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private portfolioUrl = 'api/portfolio/getItems';  // URL to web api
    private items: PortfolioItem[];

    constructor(private http: Http) {
    }
        
    getItems(): Promise<PortfolioItem[]> {
        if (this.items != null) return Promise.resolve(this.items);

        return this.http.get(this.portfolioUrl)
            .toPromise()
            .then(response => this.items = response.json() as PortfolioItem[])
            .catch(this.handleError);
    }

    getItem(slug: string): Promise<PortfolioItem> {
        return this.getItems().then(items => items.find(x => x.slug === slug));
    }
    

    private handleError(error: any): Promise<any> {
        console.error('portfolioService - An error occurred', error);
        return Promise.reject(error.message || error);
    }
}