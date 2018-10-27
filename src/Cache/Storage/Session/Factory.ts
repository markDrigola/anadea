import {Session} from "../Session";
import {Factory as DateTimeCurrentFactory} from "../../../DateTime/Current/Factory";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    // ########################################

    constructor(
        dateTimeCurrentFactory: DateTimeCurrentFactory
    ) {
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
    }

    // ########################################

    public create(): Session {
        let storage = window.sessionStorage;

        return new Session(
            storage,
            this.dateTimeCurrentFactory
            );
    }

    // ########################################
}
