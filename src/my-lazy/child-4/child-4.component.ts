import {Component, Injector, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-child-4',
    templateUrl: './child-4.component.html'
})
export class Child4Component implements OnInit {
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