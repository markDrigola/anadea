import {Logger} from "../../Logger";
import {BaseInterface} from "./BaseInterface";
import {Entity} from "../Entity";

// TODO rename to logger
export class Logging implements BaseInterface {

    private logger: Logger = null;

    // ########################################

    constructor(
        logger: Logger,
    ) {
        this.logger = logger;
    }

    // ########################################

    public process(entity: Entity): void {
        this.logger.process(entity.getMessage(), 'Error', entity.getStack(), 'test group')
    }

    // ########################################
}
