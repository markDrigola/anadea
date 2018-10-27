import {BaseInterface} from "./BaseInterface";
import {Factory as ResultFactory} from "../Result/Factory";
import {Result} from "../Result";
import {Injectable} from "@angular/core";

@Injectable()
export class Test2Task implements BaseInterface {

    private resultFactory: ResultFactory = null;

    // ########################################

    constructor(
        resultFactory: ResultFactory
    ) {
        this.resultFactory = resultFactory;
    }



    // ########################################

    load(): Result {
        console.log('Test2Task is run')
        return this.resultFactory.create();
    }

    // ########################################
}