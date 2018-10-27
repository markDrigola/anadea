import {Success as SuccessResponse} from "../Success";
import {Error as ErrorResponse} from "../Error";

export interface BaseInterface {

    // ########################################

    isValid(response: SuccessResponse | ErrorResponse): boolean;

    // ########################################
}
