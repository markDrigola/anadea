import {Success} from "./Rest/Response/Success";
import {Error} from "./Rest/Response/Error";
import {Connector as RestConnector} from "./Rest/Connector";
import {Factory as RestCommandGetFactory} from "./Storage/RestCommands/Get/Factory";
import {Factory as RestCommandSetFactory} from "./Storage/RestCommands/Set/Factory";
import {Factory as RestCommandDeleteFactory} from "./Storage/RestCommands/Delete/Factory";
import {Factory as RestCommandRetrieveFactory} from "./Storage/RestCommands/Retrieve/Factory";
import {Factory as RestCommandTruncateFactory} from "./Storage/RestCommands/Truncate/Factory";
import {Factory as RestCommandOverrideFactory} from "./Storage/RestCommands/Override/Factory";

export class Storage {

    private restConnector: RestConnector = null;

    private restCommandGetFactory: RestCommandGetFactory = null;

    private restCommandSetFactory: RestCommandSetFactory = null;

    private restCommandDeleteFactory: RestCommandDeleteFactory = null;

    private restCommandOverrideFactory: RestCommandOverrideFactory = null;

    private restCommandRetrieveFactory: RestCommandRetrieveFactory = null;

    private restCommandTruncateFactory: RestCommandTruncateFactory = null;

    // ########################################

    constructor(
        restConnector: RestConnector,
        restCommandGetFactory: RestCommandGetFactory,
        restCommandSetFactory: RestCommandSetFactory,
        restCommandDeleteFactory: RestCommandDeleteFactory,
        restCommandOverrideFactory: RestCommandOverrideFactory,
        restCommandRetrieveFactory: RestCommandRetrieveFactory,
        restCommandTruncateFactory: RestCommandTruncateFactory
    ) {
        this.restConnector = restConnector;
        this.restCommandGetFactory = restCommandGetFactory;
        this.restCommandSetFactory = restCommandSetFactory;
        this.restCommandDeleteFactory = restCommandDeleteFactory;
        this.restCommandOverrideFactory = restCommandOverrideFactory;
        this.restCommandRetrieveFactory = restCommandRetrieveFactory;
        this.restCommandTruncateFactory = restCommandTruncateFactory;
    }

    // ########################################

    public get(params: string): Promise<Success | Error> {
        return this.restConnector.process(this.restCommandGetFactory.create(params));
    }

    public delete(params: string): Promise<Success | Error> {
        return this.restConnector.process(this.restCommandDeleteFactory.create(params));
    }

    public retrieve(params: string): Promise<Success | Error> {
        return this.restConnector.process(this.restCommandRetrieveFactory.create(params));
    }

    public truncate(params: string): Promise<Success | Error> {
        return this.restConnector.process(this.restCommandTruncateFactory.create(params));
    }

    // ########################################

    public override(params: string, body: any): Promise<Success | Error> {
        return this.restConnector.process(this.restCommandOverrideFactory.create(params, body));
    }

    public set(params: string, body: any): Promise<Success | Error> {
        return this.restConnector.process(this.restCommandSetFactory.create(params, body));
    }

    // ########################################
}
