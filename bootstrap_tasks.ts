import {Registration} from "./src/Bootstrap/Registration";
import {SignalGenerator} from "./src/Bootstrap/Task/BackgroundWorker/SignalGenerator";

export const REGISTRATION = new Registration([
    {
        taskClass: SignalGenerator,
        'first': true
    }
]);
