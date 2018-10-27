import {KeySlash} from "../KeySlash";
import {Injectable} from "@angular/core";
import {BaseInterface} from "../../../BaseInterface";

@Injectable()
export class Factory {

    // ########################################

    public create(storage: BaseInterface): KeySlash {
        return new KeySlash(storage);
    }

    // ########################################
}
