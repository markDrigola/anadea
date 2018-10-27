import {Entity} from "../Entity";
import {Moment} from "moment";

export class Factory {

    // ########################################

    public create(start: Moment, end: Moment): Entity {
        if (end.unix() < start.unix()) {
            throw new Error('End Date Time must be more than Start Date Time.')
        }

        return new Entity(start, end);
    }

    // ########################################
}
