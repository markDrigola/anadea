export class Result {

    private promise: Promise<any> = null;

    // ########################################

    constructor(
        promise: Promise<any>
    ) {
        this.promise = promise;
    }

    // ########################################

    public getPromise() {
        return this.promise;
    }

    // ########################################
}
