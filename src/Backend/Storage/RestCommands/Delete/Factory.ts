import {Config} from "../../../../Config";
import {Inject, Injectable} from "@angular/core";
import {Delete} from "../Delete";

@Injectable()
export class Factory {

    private url: string = 'storage';

    private method: string = 'delete';

    // ########################################

    public create(params: string, body: any = {}): Delete {
        return new Delete(
            this.url,
            this.method,
            params,
            body
        );
    }

    // ########################################
}
