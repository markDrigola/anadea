import {Set} from "../Set";
import {BaseInterface} from "../BaseInterface";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    // ########################################

    public create(validators: BaseInterface[]): Set {
        return new Set(validators);
    }

    // ########################################
}
