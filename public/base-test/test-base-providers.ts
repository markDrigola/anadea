import {BaseTestTask} from './base-test-task';
import {RegistrationObj} from './registrationBase';
import {REGISTRATIONS as CONFIG_REGISTRATION} from "./BaseConfigRegistration";
import {BOOTSTRAP_REGISTRATIONS, BOOTSTRAP_TASKS} from "../../di_providers/bootstrap";


export const TestBaseProviders = [
    {
        provide: BOOTSTRAP_REGISTRATIONS,
        useValue: RegistrationObj,
        multi: true
    },
    {
        provide: BOOTSTRAP_TASKS,
        useClass: BaseTestTask,
        multi: true
    },
    {
        provide: 'CONFIG_REGISTRATIONS',
        useValue: CONFIG_REGISTRATION,
        multi: true
    },
];
