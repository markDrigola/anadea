import {BaseInterface} from "./Error/BaseInterface";

export class Error {

    private errors: BaseInterface[] = null;

    // ########################################

    constructor(
        errors: BaseInterface[]
    ) {
        this.errors = errors;
    }

    // ########################################

    public getErrors(): BaseInterface[] {
        return this.errors;
    }

    // ########################################
}
