export interface BaseInterface {

    // ########################################

    isExist(group: string, key: string): boolean;

    set(group: string, key: string, value: any): void;

    get(group: string, key: string): Object;

    delete(group: string, key: string): void;

    // ########################################
}
