import {Factory as DateTimeCurrentFactory} from "../DateTime/Current/Factory";
import {Injectable} from "@angular/core";
import {Task} from "./Definition/Task";
import {BaseAbstract} from "./Task/BaseAbstract";
import {AsyncLock} from "./AsyncLock";

@Injectable()
export class Processor {

    private taskDefinitions: Task[] = null;

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    private processDefinitions: { taskDefinition: Task, asyncLock: AsyncLock, dataLastRun: number | null }[] = [];

    // ########################################

    constructor(
        taskDefinitions: Task[],
        dateTimeCurrentFactory: DateTimeCurrentFactory
    ) {
        this.taskDefinitions = taskDefinitions;
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;

        this.taskDefinitions.forEach((definition: Task) => {
            this.processDefinitions.push({taskDefinition: definition, asyncLock: null, dataLastRun: null});
        })
    }

    // ########################################

    public process() {
        this.processDefinitions.forEach((definition) => {
            if (definition.dataLastRun !== null && this.dateTimeCurrentFactory.create().getTimeStamp() < definition.dataLastRun + definition.taskDefinition.getInterval()) {
                return;
            }

            if (definition.asyncLock !== null && definition.asyncLock.isCompleted() === false) {
                return;
            }

            let taskFactory = definition.taskDefinition.getFactory();
            let task: BaseAbstract = taskFactory.create();

            definition.asyncLock = task.process();
            definition.dataLastRun = this.dateTimeCurrentFactory.create().getTimeStamp();
        })
    }

    // ########################################
}
