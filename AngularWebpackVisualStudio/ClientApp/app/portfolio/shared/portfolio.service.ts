import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';

import { PortfolioItem } from "../shared/portfolio-item.model";

@Injectable()
export class PortfolioService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private portfolioUrl = 'api/portfolio/getItems';  // URL to web api
    private portfolioImgUrlBase = '';

    private items: PortfolioItem[];

    constructor(private http: Http) {
    }
        
    getItems(): Promise<PortfolioItem[]> {
        if (this.items != null) return Promise.resolve(this.items);

        return this.http.get(this.portfolioUrl)
            .toPromise()
            .then(response => {
                let json = response.json();
                this.portfolioImgUrlBase = json.baseImgUrl as string;
                return this.items = json.items as PortfolioItem[];
            })
            .catch(this.handleError);
    }

    getItem(slug: string): Promise<PortfolioItem> {
        return this.getItems().then(items => items.find(x => x.slug === slug));
    }

    getImgSrc(imgName: string): string {
        if (!/^(f|ht)tps?:\/\//i.test(imgName)) {
            return this.portfolioImgUrlBase + imgName;
        }
        return imgName;
    }

    getDefaultImgSrc(item: PortfolioItem): string {
        return this.getImgSrc(item.images[item.imageIndex]);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('portfolioService - An error occurred', error);
        return Promise.reject(error.message || error);
    }
}