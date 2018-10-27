import {BaseInterface} from "./BaseInterface";
import {Observable} from "rxjs/Observable";
import {Factory as ResultFactory} from "../Result/Factory";
import {Result} from "../Result";
import {Injectable} from "@angular/core";

@Injectable()
export class TestTask implements BaseInterface {

    private resultFactory: ResultFactory = null;

    // ########################################

    constructor(
        resultFactory: ResultFactory
    ) {
        this.resultFactory = resultFactory;
    }

    load(): Result {
        const resultPromise =  new Observable((observer) => {
            setTimeout(() => {
                console.log('TestTask is run');
                observer.next(true);
                observer.complete();
            }, 5000)
        }).toPromise();

        return this.resultFactory.create(resultPromise);
    }

    // ########################################

    // ########################################
}