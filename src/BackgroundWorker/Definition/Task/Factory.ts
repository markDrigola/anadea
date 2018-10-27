import {Task} from "../Task";
import {Injectable, Injector} from "@angular/core";

@Injectable()
export class Factory {

    private injector: Injector = null;

    // ########################################

    constructor(
        injector: Injector
    ) {
        this.injector = injector;
    }

    // ########################################

    public create(params: object): Task {
        let properties = {};
        let interval = null;

        if (params['properties']) {

            properties = params['properties'];
        }

        if (params['interval']) {

            interval = params['interval'];
        }

        let preparedParams = {
            factory: this.injector.get(params['factory']),
            properties: properties,
            interval: interval
        };

        return new Task(preparedParams);
    }

    // ########################################
}
