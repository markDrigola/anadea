import {Factory as ManagerFactory} from "../src/Logger/Factory";
import {Factory as BackendFactory} from "../src/Logger/Stream/Backend/Factory";
import {Factory as ConsoleFactory} from "../src/Logger/Stream/Console/Factory";
import {Factory as CollectorFactory} from "../src/Environment/Collector/Factory";
import {Config} from "../src/Config";
import {Injector} from "@angular/core";
import {Logger} from "../src/Logger";

export function AngularFactoryFunctionLogger(injector: Injector, config: Config, backend: BackendFactory, console: ConsoleFactory, collectorFactory: CollectorFactory) {
    return new ManagerFactory(
        injector,
        config,
        backend,
        console,
        collectorFactory
    ).create();
}

export const Providers = [
    BackendFactory,
    ConsoleFactory,
    CollectorFactory,
    {
        provide: 'Logger',
        useFactory: AngularFactoryFunctionLogger,
        deps: [Injector, 'CONFIG', BackendFactory, ConsoleFactory, CollectorFactory]
    }
];
