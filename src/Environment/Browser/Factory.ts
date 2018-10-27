import {Browser} from "../Browser";

export class Factory {

    // ########################################

    public create(): Browser {
        return new Browser(
            navigator.userAgent,
            navigator.appName
        );
    }

    // ########################################
}