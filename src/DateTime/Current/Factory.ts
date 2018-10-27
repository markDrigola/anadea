import {Current} from "../Current";
import * as momentNs from 'moment';
const moment = momentNs;

export class Factory {

    // ########################################

    public create(): Current {
        return new Current(moment);
    }

    // ########################################
}
