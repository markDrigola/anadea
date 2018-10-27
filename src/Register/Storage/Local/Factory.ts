import {Local} from "../Local";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    // ########################################

    public create(): Local {
        let localStorage: Storage = window.localStorage;

        return new Local(
            localStorage
        );
    }

    // ########################################
}