import {Definition} from "../Definition";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    // ########################################

    public create(pattern: string, tasks: any[]): Definition {
        return new Definition(pattern, tasks);
    }

    // ########################################
}
