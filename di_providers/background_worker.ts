import {Factory as BackgroundWorkerProcessorFactory} from "../src/BackgroundWorker/Processor/Factory";
import {Factory as TaskDefinitionFactory} from "../src/BackgroundWorker/Definition/Task/Factory";
import {Factory as AsyncLockFactory} from "../src/BackgroundWorker/AsyncLock/Factory";

export const Providers = [
    TaskDefinitionFactory,
    BackgroundWorkerProcessorFactory,
    AsyncLockFactory
];
