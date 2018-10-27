import {Timer} from "../Timer";
import {Injectable} from "@angular/core";
import {Factory as DateTimeCurrentFactory} from "../Current/Factory";
import {Factory as TimerEntityFactory} from "./Entity/Factory";

@Injectable()
export class Factory {

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    private timerEntityFactory: TimerEntityFactory = null;

    // ########################################

    constructor(
        dateTimeCurrentFactory: DateTimeCurrentFactory,
        timerEntityFactory: TimerEntityFactory
    ) {
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
        this.timerEntityFactory = timerEntityFactory;
    }

    // ########################################

    public create(): Timer {
        return new Timer(
            this.dateTimeCurrentFactory,
            this.timerEntityFactory
        );
    }

    // ########################################
}
