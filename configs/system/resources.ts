import {Factory as VariableStorageFactory} from "../../src/Cache/Storage/Variable/Factory";
import {Factory as SessionStorageFactory} from "../../src/Cache/Storage/Session/Factory";

export const CONFIG = {
    cache: {
        runtime_storage: SessionStorageFactory
    }
};
