import {TestMyResponse} from '../TestMyResponse';
import {Factory as ValidatorSetFactory} from "../Validator/Set/Factory";
import {TestValidator} from "../Validator/testValidator";
import {Success as SuccessResponse} from "../Success";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private validatorSetFactory: ValidatorSetFactory = null;

    // ########################################

    constructor(
        validatorSetFactory: ValidatorSetFactory
    ) {
        this.validatorSetFactory = validatorSetFactory;
    }

    // ########################################

    public create(response: SuccessResponse): TestMyResponse {
        let validatorSet = this.validatorSetFactory.create([
            // new TestValidator()
        ]);

        if (!validatorSet.process(response)) {
            throw new Error('Response is not valid');
        }

        return new TestMyResponse();
    }

    // ########################################
}
