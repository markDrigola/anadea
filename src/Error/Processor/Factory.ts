import {Processor} from "../Processor";
import {BaseInterface as TaskBaseInterface} from "../Task/BaseInterface";

export class Factory {

    // ########################################

    public create(tasks: TaskBaseInterface[]): Processor {
        return new Processor(tasks);
    }

    // ########################################
}
