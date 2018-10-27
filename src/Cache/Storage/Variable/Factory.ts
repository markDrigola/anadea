import {Injectable} from "@angular/core";
import {Variable} from "../Variable";
import {Factory as DateTimeCurrentFactory} from "../../../DateTime/Current/Factory";

@Injectable()
export class Factory {

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    // ########################################

    constructor(dateTimeCurrentFactory: DateTimeCurrentFactory) {
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
    }

    // ########################################

    public create(): Variable {
        return new Variable(this.dateTimeCurrentFactory);
    }

    // ########################################
}
