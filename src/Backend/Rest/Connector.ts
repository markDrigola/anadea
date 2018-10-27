import {BaseInterface} from "./Request/BaseInterface";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Factory as SuccessResponseFactory} from "./Response/Success/Factory";
import {Success as ResponseSuccess} from "./Response/Success";
import {Error as ResponseError} from "./Response/Error";
import {Factory as ErrorResponseFactory} from "./Response/Error/Factory";
import {Observer} from "rxjs/Observer";

export class  Connector {

    private baseUrl: string = '';

    private httpClient: HttpClient = null;

    private successResponseFactory: SuccessResponseFactory = null;

    private errorResponseFactory: ErrorResponseFactory = null;

    // ########################################

    constructor(
        baseUrl: string,
        httpClient: HttpClient,
        successResponseFactory: SuccessResponseFactory,
        errorResponseFactory: ErrorResponseFactory
    ) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.successResponseFactory = successResponseFactory;
        this.errorResponseFactory = errorResponseFactory;
    }

    // ########################################

    public process(command: BaseInterface): Promise<ResponseSuccess | ResponseError> {
        let method = command.getMethod();

        if (method === 'get') {
            return this.get(command.getUrl(), command.getParams());
        }

        if (method === 'delete') {
            return this.delete(command.getUrl(), command.getParams());
        }

        if (method === 'post') {
            return this.post(command.getUrl(), command.getParams(), command.getBody());
        }

        if (method === 'put') {
            return this.put(command.getUrl(), command.getParams(), command.getBody());
        }

        if (method === 'patch') {
            return this.patch(command.getUrl(), command.getParams(), command.getBody());
        }

        throw new Error(`Unknown command ${method}`);
    }

    // ########################################

    private get(url: string, params: string): Promise<ResponseSuccess | ResponseError> {
        let requestUrl = `${this.baseUrl}${url}${params}`;

        return new Observable<any>((observer) => {
            let response: ResponseSuccess | ResponseError;

            this.httpClient.get(requestUrl, { observe: 'response' }).subscribe((resp: HttpResponse<any>) => {

                this.handlerSuccessResponse(resp.body, observer);
            }, (error: HttpErrorResponse) => {

                this.handlerErrorResponse(error, observer);
            })
        }).toPromise()
    }

    private post(url: string, params: string, body: any): Promise<ResponseSuccess | ResponseError> {
        let requestUrl = `${this.baseUrl}${url}${params}`;

        return new Observable<any>((observer) => {
            let response: ResponseSuccess | ResponseError;

            this.httpClient.post(requestUrl, body, { observe: 'response' }).subscribe((resp: HttpResponse<any>) => {

                this.handlerSuccessResponse(resp.body, observer);
            }, (error: HttpErrorResponse) => {

                this.handlerErrorResponse(error, observer)
            })
        }).toPromise()
    }

    private put(url: string, params: string, body: any): Promise<ResponseSuccess | ResponseError> {
        let requestUrl = `${this.baseUrl}${url}${params}`;

        return new Observable<any>((observer) => {
            let response: ResponseSuccess | ResponseError;

            this.httpClient.put(requestUrl, body, { observe: 'response' }).subscribe((resp: HttpResponse<any>) => {

                this.handlerSuccessResponse(resp.body, observer);
            }, (error: HttpErrorResponse) => {

                this.handlerErrorResponse(error, observer);
            })
        }).toPromise()
    }

    private delete(url: string, params: string): Promise<ResponseSuccess | ResponseError> {
        let requestUrl = `${this.baseUrl}${url}${params}`;

        return new Observable<any>((observer) => {
            let response: ResponseSuccess | ResponseError;

            this.httpClient.delete(requestUrl, { observe: 'response' }).subscribe((resp: HttpResponse<any>) => {

                this.handlerSuccessResponse(resp.body, observer);
            }, (error: HttpErrorResponse) => {

                this.handlerErrorResponse(error, observer)
            })
        }).toPromise()
    }

    private patch(url: string, params: string, body: any): Promise<ResponseSuccess | ResponseError> {
        let requestUrl = `${this.baseUrl}${url}${params}`;

        return new Observable<any>((observer) => {
            let response: ResponseSuccess | ResponseError;

            this.httpClient.patch(requestUrl, body, { observe: 'response' }).subscribe((resp: HttpResponse<any>) => {

                this.handlerSuccessResponse(resp.body, observer);
            }, (error: HttpErrorResponse) => {

                this.handlerErrorResponse(error, observer)
            })
        }).toPromise()
    }

    // ########################################

    private handlerSuccessResponse(data: any, observer: Observer<any>) {
        let responseDataParse = data;

        if (typeof data === 'string') {
            responseDataParse = JSON.parse(data);
        }

        if (responseDataParse['data']) {
            let response = this.successResponseFactory.create(responseDataParse['data']);

            observer.next(response);
            observer.complete();

            return;
        } else {
            observer.complete();
            throw new Error('Unknown Success Response!');
        }
    }

    private handlerErrorResponse(error: HttpErrorResponse, observer: Observer<any>) {
        let responseErrorParse = error.error;

        if (typeof error.error === 'string') {
            responseErrorParse = JSON.parse(error.error);
        }

        if (responseErrorParse['errors']) {
            let response = this.errorResponseFactory.create(responseErrorParse['errors']);

            observer.error(response);
            observer.complete();

            return;
        } else {
            observer.complete();

            throw new Error('Unknown Error Response!');
        }
    }

    // ########################################
}
