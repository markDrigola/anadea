import {CONFIG as systemMainConfig} from './system/main';
import {CONFIG as errorConfig} from './error';
import {CONFIG as loggerConfig} from './logger';
import {CONFIG as resourcesConfig} from './system/resources';
import {CONFIG as cronConfig} from './system/background_worker';
import {Registration} from '../src/Config/Registration';

export const REGISTRATIONS = new Registration({
    '/system/main/': systemMainConfig,
    '/error/': errorConfig,
    '/logger/': loggerConfig,
    '/system/resources/': resourcesConfig,
    '/system/background_worker/': cronConfig
});
