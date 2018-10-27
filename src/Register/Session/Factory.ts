import {Injectable} from "@angular/core";
import {Factory as ManagerFactory} from "../Manager/Factory";
import {Session} from "../Session";
import {Session as SessionStorage} from "../Storage/Session";
import {Manager} from "../Manager";

@Injectable()
export class Factory {

    private managerFactory: ManagerFactory = null;

    private storage: SessionStorage = null;

    // ########################################

    constructor(
        managerFactory: ManagerFactory,
        storage: SessionStorage
    ) {
        this.managerFactory = managerFactory;
        this.storage = storage;
    }

    // ########################################

    public create(): Session {
        let manager: Manager = this.managerFactory.create(this.storage);

        return new Session(
            manager
        );
    }

    // ########################################
}
