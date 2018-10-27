import {Logger} from "../Logger";
import {Config} from "../Config";
import {Factory as BackendFactory} from "./Stream/Backend/Factory";
import {Factory as ConsoleFactory} from "./Stream/Console/Factory";
import {BaseInterface} from "./Stream/BaseInterface";
import {Factory as CollectorFactory} from "../Environment/Collector/Factory";
import {Injector} from "@angular/core";

export class Factory {

    private injector: Injector = null;

    private systemConfig: Config = null;

    private backendLoggingFactory: BackendFactory = null;

    private consoleLoggingFactory: ConsoleFactory = null;

    private collectorFactory: CollectorFactory = null;

    // ########################################

    constructor(
        injector: Injector,
        systemConfig: Config,
        backendLoggingFactory: BackendFactory,
        consoleLoggingFactory: ConsoleFactory,
        collectorFactory: CollectorFactory
    ) {
        this.injector = injector;
        this.systemConfig = systemConfig;
        this.backendLoggingFactory = backendLoggingFactory;
        this.consoleLoggingFactory = consoleLoggingFactory;
        this.collectorFactory = collectorFactory;
    }

    // ########################################

    public create(): Logger {
        let config = this.systemConfig.get('/logger/');
        let streams: BaseInterface[] = [];
        let defaultStreams: BaseInterface[] = config['default_streams'];

        if (defaultStreams['backend_logging'] && defaultStreams['backend_logging']['status']) {
            let collectorData;

            if (defaultStreams['backend_logging']['data_collector']) {
                collectorData = this.collectorFactory.create(
                    defaultStreams['backend_logging']['data_collector']['browser'],
                    defaultStreams['backend_logging']['data_collector']['operationSystem'],
                    defaultStreams['backend_logging']['data_collector']['locale'],
                    defaultStreams['backend_logging']['data_collector']['screen']
                ).getInfo()
            }

            streams.push(this.backendLoggingFactory.create(collectorData));
        }

        if (defaultStreams['console_logging'] && defaultStreams['console_logging']['status']) {
            let collectorData;

            if (defaultStreams['console_logging']['data_collector']) {
                collectorData = this.collectorFactory.create(
                    defaultStreams['console_logging']['data_collector']['browser'],
                    defaultStreams['console_logging']['data_collector']['operationSystem'],
                    defaultStreams['console_logging']['data_collector']['locale'],
                    defaultStreams['console_logging']['data_collector']['screen']
                ).getInfo()
            }

            streams.push(this.consoleLoggingFactory.create(collectorData));
        }

        let streamsInConfig = this.systemConfig.get('/logger/streams/');

        for (let streamName of <any[]>streamsInConfig) {
            let streamFactory = this.injector.get(streamName);
            let stream = streamFactory.create();

            streams.forEach((defaultStream) => {
                if (defaultStream.CLASS_NAME === stream.CLASS_NAME) {
                    throw new Error(`Stream "${stream.CLASS_NAME}" is already exist.`);
                }
            });

            streams.push(stream);
        }

        return new Logger(streams);
    }

    // ########################################
}
