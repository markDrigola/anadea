import {BaseInterface} from "./BaseInterface";
import {Success as SuccessResponse} from "../Success";
import {Injectable} from "@angular/core";
import {Error as ErrorResponse} from "../Error";

@Injectable()
export class Set {

    private validators: BaseInterface[] = [];

    // ########################################

    constructor(
        validators: BaseInterface[]
    ) {
        this.validators = validators;
    }

    // ########################################

    public process(response: SuccessResponse | ErrorResponse): boolean {
        let result: boolean = true;

        this.validators.forEach((validator) => {
            result = validator.isValid(response);

            if (result === false) {
                return result;
            }
        });

        return result;
    }

    // ########################################
}