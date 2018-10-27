import {Backend} from "../Backend";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    // ########################################

    public create(data): Backend {
        return new Backend(
            data
        );
    }

    // ########################################
}
