import {
    Component,
    Renderer,
    ViewChild,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html'
})
export class NavMenuComponent  {
    public isCollapsed: boolean = true;
}
