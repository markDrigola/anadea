import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";


@Component({
    selector: 'app-new-test',
    templateUrl: './new-test.component.html',
    styleUrls: ['./new-test.component.css']
})
export class NewTestComponent {
    constructor(
        // private router: Router
    ) {

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
