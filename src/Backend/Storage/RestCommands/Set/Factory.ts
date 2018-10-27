import {Set} from "../Set";
import {Inject, Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private url: string = 'storage';

    private method: string = 'patch';

    // ########################################

    public create(params: string, body: any): Set {
        return new Set(
            this.url,
            this.method,
            params,
            body
        );
    }

    // ########################################
}
