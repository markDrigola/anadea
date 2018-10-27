import {Environment} from "../Environment";
import {Config} from "../Config";
import {Inject} from "@angular/core";

export class Factory {

    private config: Config = null;

    // ########################################

    constructor(@Inject('CONFIG') config: Config) {
        this.config = config;
    }

    // ########################################

    public create(): Environment {
        return new Environment(
            this.config.get('/system/main/environment/'),
            this.config.get('/system/main/mode/')
        );
    }

    // ########################################
}