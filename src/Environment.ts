import {Injectable} from "@angular/core";

@Injectable()
export class Environment {

    static readonly ENVIRONMENT_DEVELOPMENT = 'DEVELOPMENT';

    static readonly ENVIRONMENT_PRODUCTION = 'PRODUCTION';

    static readonly MODE_STANDARD = 'STANDARD';

    // ########################################

    private mode: string | object = null;

    private environment: string | object = null;

    // ########################################

    constructor(
        environment: any,
        mode: any
    ) {
        this.environment = environment;
        this.mode = mode;
    }

    // ########################################

    public getMode(): Object {
        return this.mode;
    }

    public getEnvironment(): Object {
        return this.environment;
    }

    // ########################################

    public isProductionEnvironment(): boolean {
        return this.environment === Environment.ENVIRONMENT_PRODUCTION;
    }

    public isDevelopmentEnvironment(): boolean {
        return this.environment === Environment.ENVIRONMENT_DEVELOPMENT;
    }

    public isStandardMode(): boolean {
        return this.mode === Environment.MODE_STANDARD;
    }

    // ########################################
}
