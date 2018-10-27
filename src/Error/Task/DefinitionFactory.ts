import {Definition} from "../Handler/Route/Definition";
import {Injectable, Injector} from "@angular/core";
import {BaseFactoryInterface} from "./BaseFactoryInterface";

@Injectable()
export class DefinitionFactory {

    private injector: Injector = null;

    // ########################################

    constructor(
        injector: Injector
    ) {
        this.injector = injector;
    }

    // ########################################

    public create(definition: Definition): any[] {
        let tasksFactoryFromDefinition: any[] = definition.getTasksFactories();
        let tasksToProcess: any[] = [];

        tasksFactoryFromDefinition.forEach((taskUnit) => {
            let taskFactory: BaseFactoryInterface = this.injector.get(taskUnit.factory);

            tasksToProcess.push(taskFactory.create(taskUnit.properties));
        });

        return tasksToProcess;
    }

    // ########################################
}