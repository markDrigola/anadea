import {Get} from "../Get";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private url: string = 'storage';

    private method: string = 'get';

    // ########################################

    public create(params: string, body: any = {}): Get {
        return new Get(
            this.url,
            this.method,
            params,
            body
        );
    }

    // ########################################
}
