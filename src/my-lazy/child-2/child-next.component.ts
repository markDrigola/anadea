import {Component, Injector, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-child-next',
    templateUrl: './child-next.component.html'
})
export class ChildNextComponent implements OnInit {
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