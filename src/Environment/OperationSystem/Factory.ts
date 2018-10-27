import {OperationSystem} from "../OperationSystem";

export class Factory {

    // ########################################

    public create(): OperationSystem {
        return new OperationSystem(
            navigator.userAgent,
            navigator.appVersion,
            navigator.platform
        );
    }

    // ########################################
}