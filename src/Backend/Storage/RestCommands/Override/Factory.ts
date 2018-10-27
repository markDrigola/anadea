import {Override} from "../Override";
import {Config} from "../../../../Config";
import {Inject, Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private url: string = 'storage';

    private method: string = 'put';

    // ########################################

    public create(params: string, body: any): Override {
        return new Override(
            this.url,
            this.method,
            params,
            body
        );
    }

    // ########################################
}
