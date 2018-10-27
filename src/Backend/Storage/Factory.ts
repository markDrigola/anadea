import {Storage} from "../Storage";
import {Connector as RestConnector} from "../Rest/Connector";
import {Factory as RestCommandGetFactory} from "./RestCommands/Get/Factory";
import {Factory as RestCommandSetFactory} from "./RestCommands/Set/Factory";
import {Factory as RestCommandDeleteFactory} from "./RestCommands/Delete/Factory";
import {Factory as RestCommandOverrideFactory} from "./RestCommands/Override/Factory";
import {Factory as RestCommandRetrieveFactory} from "./RestCommands/Retrieve/Factory";
import {Factory as RestCommandTruncateFactory} from "./RestCommands/Truncate/Factory";

export class Factory {

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

    public create(): Storage {
        return new Storage(
            this.restConnector,
            this.restCommandGetFactory,
            this.restCommandSetFactory,
            this.restCommandDeleteFactory,
            this.restCommandOverrideFactory,
            this.restCommandRetrieveFactory,
            this.restCommandTruncateFactory
        );
    }

    // ########################################
}
