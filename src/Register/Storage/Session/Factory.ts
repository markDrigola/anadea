import {Session} from "../Session";

export class Factory {


    // ########################################

    public create(): Session {
        let sessionStorage: Storage = window.sessionStorage;

        return new Session(
            sessionStorage
        );
    }

    // ########################################
}