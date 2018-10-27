import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";


@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent {
    ids = [
        1, 2, 3, 4, 5
    ];

    constructor(

    ) {

    }


}
