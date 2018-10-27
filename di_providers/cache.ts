import {Factory as KeySlashFactory} from "../src/Cache/Storage/Adapter/KeySlash/Factory";
import {Factory as VariableFactory} from "../src/Cache/Storage/Variable/Factory";
import {Factory as ControllerFactory} from "../src/Cache/Runtime/Controller/Factory";
import {Controller as CacheController} from "../src/Cache/Runtime/Controller";
import {Runtime as RuntimeCache} from "../src/Cache/Runtime";
import {Permanent as PermanentCache} from "../src/Cache/Permanent";
import {Factory as RuntimeCacheFactory} from "../src/Cache/Runtime/Factory";
import {Factory as PermanentCacheFactory} from "../src/Cache/Permanent/Factory";
import {Injector} from "@angular/core";
import {Config} from "../src/Config";
import {Factory as LocalStorageFactory} from "../src/Cache/Storage/Local/Factory";
import {Factory as SessionStorageFactory} from "../src/Cache/Storage/Session/Factory";

export function AngularFactoryFunctionController() {
    return new ControllerFactory().create();
}

export function AngularFactoryFunctionRuntime(config: Config, injector: Injector, keySlashFactory: KeySlashFactory, controller: CacheController) {
    return new RuntimeCacheFactory(
        config,
        injector,
        keySlashFactory,
        controller
    ).create();
}

export function AngularFactoryFunctionPermanent(config: Config, localStorageFactory: LocalStorageFactory, keySlashFactory: KeySlashFactory) {
    return new PermanentCacheFactory(
        config,
        keySlashFactory,
        localStorageFactory
    ).create();
}

export const Providers = [
    KeySlashFactory,
    VariableFactory,
    LocalStorageFactory,
    SessionStorageFactory,
    {
        provide: CacheController,
        useFactory: AngularFactoryFunctionController
    },
    {
        provide: RuntimeCache,
        useFactory: AngularFactoryFunctionRuntime,
        deps: ['CONFIG', Injector, KeySlashFactory, CacheController]
    },
    {
        provide: PermanentCache,
        useFactory: AngularFactoryFunctionPermanent,
        deps: ['CONFIG', LocalStorageFactory, KeySlashFactory]
    }
];
