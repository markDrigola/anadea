import {BaseInterface} from "./BaseInterface";

export class Simple implements BaseInterface {
    
    private url: string = null;
    
    private method: string = null;
    
    private params: string = null;
    
    private body: any = null;
    
    // ########################################

    constructor(
        url: string,
        method: string,
        params: string,
        body: any
    ) {
        this.url = url;
        this.method = method;
        this.params = params;
        this.body = body;
    }
    
    // ########################################

    public getBody(): any {
        return this.body;
    }

    public getMethod(): string {
        return this.method;
    }

    public getParams(): string {
        return this.params;
    }

    public getUrl(): string {
        return this.url;
    }

    // ########################################
}
