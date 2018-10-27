import {Factory as DisplayToModalFactory} from "./src/Error/Task/DisplayToModal/Factory";
import {Factory as LoggingFactory} from "./src/Error/Task/Logging/Factory";

export const METADATA = {
    error: {
        default_tasks: [
            {
                factory: LoggingFactory
            },
            {
                factory: DisplayToModalFactory,
                properties: {
                    closing: false
                }
            }
        ]
    },
    background_worker: [
        // {
        //     factory: CheckCookieFactory,
        //     interval: 2,
        //     properties: []
        // }
    ]
};
