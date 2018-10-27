import {BaseTestTask} from "./base-test-task";
import {Registration} from "../../src/Bootstrap/Registration";


export const RegistrationObj = new Registration([
    {
        taskClass: BaseTestTask,
        'last': true
    }
]);
