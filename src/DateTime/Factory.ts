import {Injectable} from "@angular/core";
import {Factory as DatetimeFactoryCurrent} from "./Current/Factory";
import {Moment} from "moment";

@Injectable()
export class Factory {

    private datetimeFactoryCurrent: DatetimeFactoryCurrent = null;

    // ########################################

    constructor(datetimeFactoryCurrent: DatetimeFactoryCurrent) {
        this.datetimeFactoryCurrent = datetimeFactoryCurrent;
    }

    // ########################################

    public createFromTimestamp(timestamp: number): Moment {
        return this.datetimeFactoryCurrent.create().createFromTimestamp(timestamp);
    }

    public createFromString(timeAsString: string): Moment {
        return this.datetimeFactoryCurrent.create().createFromFormat(timeAsString);
    }

    // ########################################
}
