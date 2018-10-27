import {BaseInterface} from "./BaseInterface";

export class Backend implements BaseInterface {

    public readonly CLASS_NAME = 'Backend';

    private data: Object = null;

    // ########################################

    constructor(
        data: Object
    ) {
        this.data = data;
    }

    // ########################################

    public process(message: string, type: string, additionalData: any, group: string) {
        console.log('send message to backend');
        console.log('Test ', this.data);
    }

    // ########################################
}
