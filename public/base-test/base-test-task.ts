import {BaseInterface} from '../../src/Bootstrap/Task/BaseInterface';
import {Factory as ResultFactory} from "../../src/Bootstrap/Result/Factory";
import {Result} from "../../src/Bootstrap/Result";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BaseTestTask implements BaseInterface {

    private resultFactory: ResultFactory = null;

    // ########################################

    constructor(
        resultFactory: ResultFactory
    ) {
        this.resultFactory = resultFactory;
    }
    load(): Result {
        debugger
        const taskPromise = new Observable((observer) => {
            setTimeout(() => {
                console.log('base-test-task')
                observer.next(true);
                observer.complete();
            }, 2000)
        }).toPromise()

        return this.resultFactory.create(taskPromise);
    }
}
