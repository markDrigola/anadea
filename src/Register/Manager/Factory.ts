import {Manager} from "../Manager";
import {BaseInterface} from "../Storage/BaseInterface";
import {Injectable} from "@angular/core";

@Injectable()
export class Factory {

    // ########################################

    public create(storage: BaseInterface): Manager {
        return new Manager(storage);
    }

    // ########################################
}