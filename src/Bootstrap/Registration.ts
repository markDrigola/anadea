import {BaseInterface as IBootstrapRegistration} from './Registration/BaseInterface';

export class Registration {

    private data: IBootstrapRegistration[];

    // ########################################

    constructor(data: IBootstrapRegistration[] = []) {
        this.data = data;
    }

    // ########################################

    public getData(): IBootstrapRegistration[] {
        return this.data;
    }

    // ########################################
}
