import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    NavigationEnd,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnDestroy{
    constructor(
        // private activatedRoute: ActivatedRoute,
        // private myActivatedRouter: ActivatedRouterService,
        // private router: Router
    ) {
        // console.log(this.router.url);
        // this.router.events
        //     .filter((event) => event instanceof NavigationEnd)
        //     .subscribe((event) => {
        //         debugger
        //         this.activatedRoute.data.subscribe((scope) => {
        //             this.myActivatedRouter.setCurrentDataScope(scope);
        //         });
        //     });
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        // this.myActivatedRouter.setCurrentDataScope(null);
    }

}
