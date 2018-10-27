import {ErrorHandler} from '@angular/core';
import {Hook} from '../src/Error/Angular/Hook';
import {Factory as EntityFactory} from "../src/Error/Entity/Factory";
import {Factory as HandlerFactory} from "../src/Error/Handler/Factory";
import {Factory as DisplayToModalFactory} from "../src/Error/Task/DisplayToModal/Factory";
import {Factory as DefinitionFactory} from "../src/Error/Handler/Route/Definition/Factory";
import {DefinitionFactory as TaskDefinitionFactory} from "../src/Error/Task/DefinitionFactory";
import {Factory as MathcerFactory} from "../src/Error/Handler/Route/Matcher/Factory";
import {Factory as DisplayToNotificationFactory } from '../src/Error/Task/DisplayToNotification/Factory'
import {Factory as LoggingFactory} from "../src/Error/Task/Logging/Factory";
import {Factory as ProcessorFactory} from "../src/Error/Processor/Factory";
import {FactoryBasedOfDefaults} from "../src/Error/Processor/FactoryBasedOfDefaults";

export const Providers = [
    {
        provide: ErrorHandler,
        useClass: Hook,
    },
    TaskDefinitionFactory,
    EntityFactory,
    DefinitionFactory,
    MathcerFactory,
    HandlerFactory,
    LoggingFactory,
    DisplayToModalFactory,
    DisplayToNotificationFactory,
    ProcessorFactory,
    FactoryBasedOfDefaults
];
