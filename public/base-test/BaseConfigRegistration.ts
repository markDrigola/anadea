import {CONFIG as systemMainBaseConfig} from './configsBase';
import {Registration} from "../../src/Config/Registration";



export const REGISTRATIONS = new Registration({
    '/system/main/': systemMainBaseConfig
});