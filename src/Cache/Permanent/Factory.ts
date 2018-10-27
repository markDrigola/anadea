import {Permanent} from "../Permanent";
import {Factory as KeySlashAdapterFactory} from "../Storage/Adapter/KeySlash/Factory";
import {Config} from "../../Config";
import {Factory as LocalStorageFactory} from "../Storage/Local/Factory";

export class Factory {

    private systemConfig: Config = null;

    private keySlashAdapterFactory: KeySlashAdapterFactory = null;

    private localStorage: LocalStorageFactory = null;

    // ########################################

    constructor(
        systemConfig: Config,
        keySlashAdapterFactory: KeySlashAdapterFactory,
        localStorage: LocalStorageFactory,
    ) {
        this.systemConfig = systemConfig;
        this.keySlashAdapterFactory = keySlashAdapterFactory;
        this.localStorage = localStorage;
    }

    // ########################################

    public create(): Permanent {
        let storage = this.localStorage.create();
        let adapter = this.keySlashAdapterFactory.create(storage);

        return new Permanent(adapter);
    }

    // ########################################
}
