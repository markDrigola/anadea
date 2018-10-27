import {Injectable} from "@angular/core";
import {Factory as ManagerFactory} from "../Manager/Factory";
import {Permanent} from "../Permanent";
import {Local} from "../Storage/Local";
import {Manager} from "../Manager";

@Injectable()
export class Factory {

    private managerFactory: ManagerFactory = null;

    private storage: Local = null;

    // ########################################

    constructor(
        managerFactory: ManagerFactory,
        storage: Local
    ) {
        this.managerFactory = managerFactory;
        this.storage = storage;
    }

    // ########################################

    public create(): Permanent {
        let manager: Manager = this.managerFactory.create(this.storage);

        return new Permanent(
            manager
        )
    }

    // ########################################
}
