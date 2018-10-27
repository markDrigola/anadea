import {Moment} from "moment";

export class Entity {

    static readonly MILLISECOND_IN_SECOND = 1000;
    static readonly SECONDS_IN_MINUTE = 60;
    static readonly SECONDS_IN_HOUR = 3600;

    // ########################################

    private start: Moment = null;

    private end: Moment = null;

    private milliseconds: number = 0;

    private seconds: number = 0;

    private minutes: number = 0;

    private hours: number = 0;

    // ########################################

    constructor(
        start: Moment,
        end: Moment
    ) {
        this.start = start;
        this.end = end;

        this.seconds = this.end.unix() - this.start.unix();
        this.milliseconds = (this.seconds * Entity.MILLISECOND_IN_SECOND) + (this.end.milliseconds() - this.start.milliseconds());
        this.minutes = Math.round(this.seconds / Entity.SECONDS_IN_MINUTE);
        this.hours = Math.round(this.seconds / Entity.SECONDS_IN_HOUR);
    }

    // ########################################

    public getStartDateTime(): Moment {
        return this.start;
    }

    public getEndDateTime(): Moment {
        return this.end;
    }

    // ########################################

    public getMilliseconds(): number {
        return this.milliseconds;
    }

    public getSeconds(): number {
        return this.seconds;
    }

    public getMinutes(): number {
        return this.minutes;
    }

    public getHours(): number {
        return this.hours;
    }

    // ########################################
}
