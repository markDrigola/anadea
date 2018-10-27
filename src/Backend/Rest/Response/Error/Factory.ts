import {Error} from "../Error";
import {BaseInterface} from "./BaseInterface";

export class Factory {

    // ########################################

    public create(errors: BaseInterface[]): Error {
        return new Error(
            errors
        )
    }

    // ########################################
}
