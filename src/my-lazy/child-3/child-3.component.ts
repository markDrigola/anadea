import {Component, Injector, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-child-3',
    templateUrl: './child-3.component.html'
})
export class Child3Component implements OnInit {
    constructor(
        private act: ActivatedRoute,
        private inj: Injector
    ) {

    }

    ngOnInit(): void {
        this.act.data.subscribe((data) => {
            // console.log(data);
        })
    }
}