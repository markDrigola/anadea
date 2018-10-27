import {Processor} from "../Processor";
import {Metadata} from "../../Metadata";
import {Inject, Injectable, Injector} from "@angular/core";
import {BaseInterface as TaskBaseInterface} from "../Task/BaseInterface";
import {BaseFactoryInterface} from "../Task/BaseFactoryInterface";

@Injectable()
export class FactoryBasedOfDefaults {

    private injector: Injector = null;

    private metadata: Metadata = null;

    // ########################################

    constructor(
        @Inject('CORE_METADATA') metadata: Metadata,
        injector: Injector
    ) {
        this.metadata = metadata;
        this.injector = injector;
    }

    // ########################################

    public create(): Processor {
        let defaultTasksFactoryAndOptions = this.metadata.get('/error/default_tasks/');
        let tasks: TaskBaseInterface[] = [];

        (<any[]>defaultTasksFactoryAndOptions).forEach((unit) => {
            let taskFactory: BaseFactoryInterface = this.injector.get(unit.factory);

            tasks.push(taskFactory.create(unit.properties))
        });

        return new Processor(tasks);
    }

    // ########################################
}
