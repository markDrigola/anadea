import {Connector} from "../Connector";
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Config} from "../../../Config";
import {Factory as SuccessResponseFactory} from "../Response/Success/Factory";
import {Factory as ErrorResponseFactory} from "../Response/Error/Factory";

@Injectable()
export class Factory {

    private config: Config = null;

    private httpClient: HttpClient = null;

    private successResponseFactory: SuccessResponseFactory = null;

    private errorResponseFactory: ErrorResponseFactory = null;

    // ########################################

    constructor(
        @Inject('CONFIG') config: Config,
        httpClient: HttpClient,
        successResponseFactory: SuccessResponseFactory,
        errorResponseFactory: ErrorResponseFactory
    ) {
        this.config = config;
        this.httpClient = httpClient;
        this.successResponseFactory = successResponseFactory;
        this.errorResponseFactory = errorResponseFactory;
    }

    // ########################################

    public create(): Connector {
        let baseUrl = (<string>this.config.get('/system/main/base_url/'));

        return new Connector(
            baseUrl,
            this.httpClient,
            this.successResponseFactory,
            this.errorResponseFactory
        );
    }

    // ########################################
}
