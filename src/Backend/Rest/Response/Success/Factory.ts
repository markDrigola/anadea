import {Success} from "../Success";

export class Factory {

    // ########################################

    public create(data: any): Success {
        return new Success(
            data
        );
    }

    // ########################################
}
