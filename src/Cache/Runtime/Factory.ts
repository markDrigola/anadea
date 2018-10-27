import {Runtime} from "../Runtime";
import {Config} from "../../Config";
import {Factory as KeySlashAdapterFactory} from "../Storage/Adapter/KeySlash/Factory";
import {Controller as CacheController} from "./Controller";
import {Inject, Injectable, Injector} from "@angular/core";

@Injectable()
export class Factory {

    private config: Config = null;

    private injector: Injector = null;

    private keySlashAdapterFactory: KeySlashAdapterFactory = null;

    private cacheController: CacheController = null;

    // ########################################

    constructor(
        @Inject('CONFIG') config: Config,
        injector: Injector,
        keySlashAdapterFactory: KeySlashAdapterFactory,
        cacheController: CacheController
    ) {
        this.config = config;
        this.injector = injector;
        this.keySlashAdapterFactory = keySlashAdapterFactory;
        this.cacheController = cacheController;
    }

    // ########################################

    public create(): Runtime {
        let runtimeCacheConfig = this.config.get('/system/resources/cache/');
        let storage = this.injector.get(runtimeCacheConfig['runtime_storage']);
        let keySlashAdapter = this.keySlashAdapterFactory.create(storage.create());

        return new Runtime(
            keySlashAdapter,
            this.cacheController
        );
    }

    // ########################################
}
