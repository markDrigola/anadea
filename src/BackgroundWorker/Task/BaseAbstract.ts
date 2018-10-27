import {AsyncLock} from "../AsyncLock";

export abstract class BaseAbstract {

    protected asyncLock: AsyncLock = null;

    constructor(
        asyncLock: AsyncLock
    ) {
        this.asyncLock = asyncLock;
    }
    // ########################################

    abstract process(): AsyncLock;

    // ########################################
}
