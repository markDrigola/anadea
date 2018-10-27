import * as momentNs from 'moment';
import {Moment} from "moment";
const moment = momentNs;

export class Current {

    private momentJs: Function = null;

    // ########################################

    constructor(momentJs: Function) {
        this.momentJs = momentJs;
    }

    // ########################################

    public getCurrentTime(): Moment {
        return this.momentJs().utc();
    }

    public getTimeStamp(): number {
        return this.momentJs().unix();
    }

    // ########################################

    public createFromTimestamp(timestamp: number): Moment {
        return moment.unix(timestamp);
    }

    public createFromFormat(timeAsString: string): Moment {
        return moment(timeAsString);
    }

    // ########################################
}
