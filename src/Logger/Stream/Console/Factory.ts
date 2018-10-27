import {Console} from "../Console";

export class Factory {

    // ########################################

    public create(data?): Console {
        return new Console(data);
    }

    // ########################################
}
