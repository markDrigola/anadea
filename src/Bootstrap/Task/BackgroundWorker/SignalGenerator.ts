import {BaseInterface} from "../BaseInterface";
import {Inject, Injectable} from "@angular/core";
import {Config} from "../../../Config";
import {Factory as CronManagerFactory} from "../../../BackgroundWorker/Processor/Factory";
import {Observable} from "rxjs/Observable";
import {Factory as ResultFactory} from "../../Result/Factory";
import {Result} from "../../Result";

@Injectable()
export class SignalGenerator implements BaseInterface {

    private config: Config = null;

    private cronManagerFactory: CronManagerFactory = null;

    private resultFactory: ResultFactory;

    // ########################################

    constructor(
        @Inject('CONFIG') config: Config,
        cronManagerFactory: CronManagerFactory,
        resultFactory: ResultFactory
    ) {
        this.config = config;
        this.cronManagerFactory = cronManagerFactory;
        this.resultFactory = resultFactory;
    }

    // ########################################

    public load(): Result {
        let result = this.resultFactory.create();
        let interval = this.config.get('/system/background_worker/signal_interval/');
        let cronManager = this.cronManagerFactory.create();

        setInterval(() => {
            cronManager.process();
        }, interval);

        return result;
    }

    // ########################################
}