import {BaseInterface} from "./BaseInterface";
import {Success as SuccessResponse} from "../Success";

export class TestValidator implements BaseInterface {

    // ########################################

    constructor() {

    }

    // ########################################

    public isValid(response: SuccessResponse): boolean {
        if (response['data']) {
        // if (response['data']['test']) {
            return true;
        }
        return false;
    }

    // ########################################
}
