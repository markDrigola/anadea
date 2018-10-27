import {APP_INITIALIZER, Optional} from '@angular/core';
import {REGISTRATION as BOOTSTRAP_REGISTRATION} from '../bootstrap_tasks';
import {Bootstrap} from '../src/Bootstrap';
import {Registration} from '../src/Bootstrap/Registration';
import {BaseInterface} from "../src/Bootstrap/Task/BaseInterface";
import {SignalGenerator} from "../src/Bootstrap/Task/BackgroundWorker/SignalGenerator";
import {InjectionToken} from "@angular/core";
import {Factory as ResultFactory} from "../src/Bootstrap/Result/Factory";

declare var Promise;

export const BOOTSTRAP_TASKS = new InjectionToken('BOOTSTRAP_TASKS');
export const BOOTSTRAP_REGISTRATIONS = new InjectionToken('BOOTSTRAP_REGISTRATIONS');

export function AngularFactoryFunctionBootstrapInitialize(registrations: Registration[], tasks: BaseInterface[]) {
    return () => {
        return new Promise((resolve, reject) => {
            const bootstrap = new Bootstrap(registrations, tasks);

            bootstrap.initialize().then(values => {
                if (values) {
                    resolve(true);
                } else {
                    reject('Bootstrap application is fail!');
                }
            });
        });
    };
}

export const Providers = [
    {
        provide: APP_INITIALIZER,
        useFactory: AngularFactoryFunctionBootstrapInitialize,
        deps: [[new Optional(), BOOTSTRAP_REGISTRATIONS], [new Optional(), BOOTSTRAP_TASKS]],
        multi: true
    },
    {
        provide: BOOTSTRAP_REGISTRATIONS,
        useValue: BOOTSTRAP_REGISTRATION,
        multi: true
    },
    {
        provide: BOOTSTRAP_TASKS,
        useClass: SignalGenerator,
        multi: true
    },
    ResultFactory
];
