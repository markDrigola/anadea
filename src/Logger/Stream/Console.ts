import {BaseInterface} from "./BaseInterface";

export class Console implements BaseInterface {

    public readonly CLASS_NAME = 'Console';

    private data: Object = null;

    // ########################################

    constructor(
        data?: Object
    ) {
        this.data = data || 'Data is not defined';
    }

    // ########################################

    public process(message: string, type: string, additionalData: any, group: string): void {
        console.log('Message: ', message);
        console.log('AdditionalData: ', additionalData);
        console.log('Group: ', group);
        console.log('Type: ', type);
        console.log('Data: ', this.data);
    }

    // ########################################
}