import {Config} from "../../../../Config";
import {Inject, Injectable} from "@angular/core";
import {Retrieve} from "../Retrieve";

@Injectable()
export class Factory {

    private url: string = 'storage';

    private method: string = 'get';

    // ########################################

    public create(params: string, body: any = {}): Retrieve {
        return new Retrieve(
            this.url,
            this.method,
            params,
            body
        );
    }

    // ########################################
}
