import {Factory as ConfigFactory} from '../src/Config/Factory';
import {Factory as ObjectWrapperFactory} from '../src/ObjectWrapper/Factory';
import {REGISTRATIONS as CONFIG_REGISTRATION} from '../configs/registration';
import {Registration} from '../src/Config/Registration';
import {Config} from "../src/Config";

export function AngularFactoryFunctionConfig(objectWrapperFactory: ObjectWrapperFactory, registrations: Registration[]) {
    return new ConfigFactory(
        objectWrapperFactory,
        registrations
    ).create();
}

export const Providers = [
    {
        provide: 'CONFIG_REGISTRATIONS',
        useValue: CONFIG_REGISTRATION,
        multi: true
    },
    {
        provide: 'CONFIG',
        useFactory: AngularFactoryFunctionConfig,
        deps: [ObjectWrapperFactory, 'CONFIG_REGISTRATIONS']
    }
];
