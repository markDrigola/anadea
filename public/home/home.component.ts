import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(
        // private router: Router
    ) {
        //
        // this.router.events
        //     .subscribe((event) => {
        //         if (event instanceof NavigationEnd) {
        //             debugger
        //         }
        //     });
        //
        // this.router.events
        //     .subscribe((event) => {
        //         if (event instanceof NavigationStart) {
        //             debugger
        //         }
        //     });
    }


}
