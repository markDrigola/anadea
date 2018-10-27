export interface BaseInterface {

    // ########################################

    readonly CLASS_NAME: string;

    // ########################################

    process(message: string, type: string, additionalData: any, group: string);

    // ########################################\
}
