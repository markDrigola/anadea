import {Factory as RestCommandGetFactory} from "../src/Backend/Storage/RestCommands/Get/Factory";
import {Factory as RestCommandDeleteFactory} from "../src/Backend/Storage/RestCommands/Delete/Factory";
import {Factory as RestCommandSetFactory} from "../src/Backend/Storage/RestCommands/Set/Factory";
import {Factory as RestCommandOverrideFactory} from "../src/Backend/Storage/RestCommands/Override/Factory";
import {Factory as RestCommandRetrieveFactory} from "../src/Backend/Storage/RestCommands/Retrieve/Factory";
import {Factory as RestCommandTruncateFactory} from "../src/Backend/Storage/RestCommands/Truncate/Factory";
import {Factory as CommandConnectorFactory} from "../src/Backend/Rest/Connector/Factory";
import {Connector as CommandConnector} from "../src/Backend/Rest/Connector";
import {HttpClient} from "@angular/common/http";
import {Config} from "../src/Config";
import {Factory as RequestSimpleFactory} from "../src/Backend/Rest/Request/Simple/Factory";
import {Storage as RestStorage} from "../src/Backend/Storage";
import {Factory as RestStorageFactory} from "../src/Backend/Storage/Factory";
import {Factory as SuccessResponseFactory} from "../src/Backend/Rest/Response/Success/Factory";
import {Factory as ErrorResponseFactory} from "../src/Backend/Rest/Response/Error/Factory";
import {Factory as ValidatorSetFactory} from "../src/Backend/Rest/Response/Validator/Set/Factory";

export function AngularFactoryFunctionCommandConnector(config: Config, httpClient: HttpClient, successResponseFactory: SuccessResponseFactory, errorResponseFactory: ErrorResponseFactory) {
    return new CommandConnectorFactory(
        config,
        httpClient,
        successResponseFactory,
        errorResponseFactory
    ).create();
}

export function AngularFactoryFunctionRestStorage(
    asyncCommandConnector: CommandConnector,
    restCommandGetFactory: RestCommandGetFactory,
    restCommandSetFactory: RestCommandSetFactory,
    restCommandDeleteFactory: RestCommandDeleteFactory,
    restCommandOverrideFactory: RestCommandOverrideFactory,
    restCommandRetrieveFactory: RestCommandRetrieveFactory,
    restCommandTruncateFactory: RestCommandTruncateFactory
) {
    return new RestStorageFactory(
        asyncCommandConnector,
        restCommandGetFactory,
        restCommandSetFactory,
        restCommandDeleteFactory,
        restCommandOverrideFactory,
        restCommandRetrieveFactory,
        restCommandTruncateFactory
    ).create();
}

export const Providers = [
    RestCommandGetFactory,
    RestCommandDeleteFactory,
    RestCommandSetFactory,
    RestCommandOverrideFactory,
    RestCommandRetrieveFactory,
    RestCommandTruncateFactory,
    RequestSimpleFactory,
    SuccessResponseFactory,
    ErrorResponseFactory,
    {
        provide: CommandConnector,
        useFactory: AngularFactoryFunctionCommandConnector,
        deps: ['CONFIG', HttpClient, SuccessResponseFactory, ErrorResponseFactory]
    },
    {
        provide: RestStorage,
        useFactory: AngularFactoryFunctionRestStorage,
        deps: [
            CommandConnector,
            RestCommandGetFactory,
            RestCommandSetFactory,
            RestCommandDeleteFactory,
            RestCommandOverrideFactory,
            RestCommandRetrieveFactory,
            RestCommandTruncateFactory
        ]
    },
    ValidatorSetFactory,
];
