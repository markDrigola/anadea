import {Result} from "../Result";

export class Factory {

    // ########################################

    public create(promise: Promise<any> = null): Result {
        return new Result(
            promise
        );
    }

    // ########################################
}
