import {Variable} from "../Variable";
import {Injectable} from "@angular/core";
import {Factory as ManagerFactory} from "../Manager/Factory";
import {Variable as VariableStorage} from "../Storage/Variable";
import {Manager} from "../Manager";

@Injectable()
export class Factory {

    private managerFactory: ManagerFactory = null;

    private storage: VariableStorage = null;

    // ########################################

    constructor(
        managerFactory: ManagerFactory,
        storage: VariableStorage
    ) {
        this.managerFactory = managerFactory;
        this.storage = storage;
    }

    // ########################################

    public create(): Variable {
        let manager: Manager = this.managerFactory.create(this.storage);

        return new Variable(manager);
    }

    // ########################################
}
