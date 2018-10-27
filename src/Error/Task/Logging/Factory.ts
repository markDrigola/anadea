import {Logging} from "../Logging";
import {Logger} from "../../../Logger";
import {Inject, Injectable} from "@angular/core";
import {BaseFactoryInterface} from "../BaseFactoryInterface";

@Injectable()
export class Factory implements BaseFactoryInterface {

    private logger: Logger = null;

    // ########################################

    constructor(
        @Inject('Logger') logger: Logger,
    ) {
        this.logger = logger;
    }

    // ########################################

    public create(): Logging {
        return new Logging(this.logger);
    }

    // ########################################
}
