import {Simple} from "../Simple";

export class Factory {

    // ########################################

    public create(url: string, method: string, params: string, body: any = {}): Simple {
        return new Simple(
            url,
            method,
            params,
            body
        );
    }

    // ########################################
}
