import {Variable} from "../Variable";

export class Factory {

    // ########################################

    public create(): Variable {
        return new Variable();
    }

    // ########################################
}
