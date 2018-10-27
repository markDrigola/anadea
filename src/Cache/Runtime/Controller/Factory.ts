import {Controller} from "../Controller";

export class Factory {

    // ########################################

    public create(): Controller {
        return new Controller();
    }

    // ########################################
}
