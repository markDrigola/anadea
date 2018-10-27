import {Truncate} from "../Truncate";
import {Config} from "../../../../Config";
import {Inject, Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private url: string = 'storage';

    private method: string = 'delete';

    // ########################################

    public create(params: string, body: any = {}): Truncate {
        return new Truncate(
            this.url,
            this.method,
            params,
            body
        );
    }

    // ########################################
}
