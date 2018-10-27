import {Entity} from "./Entity";
import {BaseInterface} from "./Task/BaseInterface";

export class Processor {

    private tasks: BaseInterface[] = null;

    // ########################################

    constructor(tasks: BaseInterface[]) {
        this.tasks = tasks;
    }

    // ########################################

    process(entity: Entity): void {
        this.tasks.forEach((task: BaseInterface) => {
            task.process(entity);
        })
    }

    // ########################################
}