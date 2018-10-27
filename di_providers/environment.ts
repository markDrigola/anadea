import {Environment} from "../src/Environment";
import {Factory as EnvironmentFactory} from "../src/Environment/Factory";
import {Factory as BrowserFactory} from "../src/Environment/Browser/Factory";
import {Factory as OperationSystemFactory} from "../src/Environment/OperationSystem/Factory";
import {Factory as LocaleFactory} from "../src/Environment/Locale/Factory";
import {Factory as ScreenFactory} from "../src/Environment/Screen/Factory";
import {Factory as CollectorFactory} from "../src/Environment/Collector/Factory";
import {Config} from "../src/Config";
import {Browser} from "../src/Environment/Browser";
import {OperationSystem} from "../src/Environment/OperationSystem";
import {Locale} from "../src/Environment/Locale";
import {Screen} from "../src/Environment/Screen";

export function AngularFactoryFunctionEnvironment(config: Config) {
    return new EnvironmentFactory(
        config
    ).create();
}

export function AngularFactoryFunctionBrowser() {
    return new BrowserFactory().create();
}

export function AngularFactoryFunctionOperationSystem() {
    return new OperationSystemFactory().create();
}

export function AngularFactoryFunctionLocale() {
    return new LocaleFactory().create();
}

export function AngularFactoryFunctionScreen() {
    return new ScreenFactory().create();
}

export const Providers = [
    {
        provide: 'Environment',
        useFactory: AngularFactoryFunctionEnvironment,
        deps: ['CONFIG']
    },
    {
        provide: 'Browser',
        useFactory: AngularFactoryFunctionBrowser
    },
    {
        provide: 'OperationSystem',
        useFactory: AngularFactoryFunctionOperationSystem
    },
    {
        provide: 'Locale',
        useFactory: AngularFactoryFunctionLocale
    },
    {
        provide: 'Screen',
        useFactory: AngularFactoryFunctionScreen
    },
    CollectorFactory,
];