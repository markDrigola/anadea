import {Component, Injector, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-child-5',
    templateUrl: './child-5.component.html'
})
export class Child5Component implements OnInit {
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