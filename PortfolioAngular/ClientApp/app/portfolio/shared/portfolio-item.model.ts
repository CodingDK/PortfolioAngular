export class PortfolioItem {
    public id: number;
    public title: string;
    public subTitle: string;
    public slug: string;
    public imageIndex: number;
    public images: string[];
    public description: string;
    public tags: string[];
    /*constructor(id: number, title: string, description: string) {
        this.title = title;
        this.slug = id.toString();
        this.image = "http://placehold.it/700x400";
        this.description = description;
    }*/
}
