import {AsyncLock} from "../AsyncLock";

export class Factory {

    // ########################################

    public create(): AsyncLock {
        return new AsyncLock()
    }

    // ########################################
}
