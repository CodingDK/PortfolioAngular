import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    //TODO make a better fix for scroll-problem than changing page
    onDeactivate() {
        document.body.scrollTop = 0;
    }
}
