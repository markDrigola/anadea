import {Factory as ConsoleFactory} from "../src/Logger/Stream/Console/Factory";

export const CONFIG = {
    default_streams: {
        backend_logging: {
            status: true,
            data_collector: {
                browser: false,
                locale: false
            }
        },
        console_logging: {
            status: true,
            data_collector: {
                locale: false
            }
        }
    },
    streams: [
        // ConsoleFactory
    ]
};