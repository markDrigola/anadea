import {Injectable} from "@angular/core";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    NavigationEnd,
    NavigationStart, ParamMap, Router,
    RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TestService {

    private currentDataScope: object = null;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        // this.router.events
        //     .filter((event) => event instanceof NavigationEnd)
        //     .map(() => this.activatedRoute)
        //     .map((route) => {
        //         while (route.firstChild) {
        //             debugger
        //             route = route.firstChild
        //         }
        //         return route;
        //     })
        //     // .filter((route) => route.outlet === 'primary')
        //     .mergeMap((route) => route.data).subscribe((data) => {
        //     console.log(data);
        // })

        // this.router.events
        //     .subscribe((event) => {
        //         if (event instanceof NavigationEnd) {
        //             debugger
        //         }
        //     });

        // this.router.events
        //     .subscribe((event) => {
        //         if (event instanceof NavigationStart) {
        //             debugger
        //         }
        //     });
    }

}
