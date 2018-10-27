import {Local} from "../Local";
import {Factory as DateTimeCurrentFactory} from "../../../DateTime/Current/Factory";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    // ########################################

    constructor(dateTimeCurrentFactory: DateTimeCurrentFactory) {
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
    }

    // ########################################

    public create(): Local{
        let localStorage: Storage = window.localStorage;

        return new Local(
            localStorage,
            this.dateTimeCurrentFactory
        );
    }

    // ########################################
}
