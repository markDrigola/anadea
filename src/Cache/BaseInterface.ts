export interface BaseInterface {

    // ########################################


    //ToDo
    // readonly INFINITY_LIFETIME: number;
    //
    // readonly DEFAULT_LIFETIME: number;

    // ########################################

    has(key: string): boolean;

    set(key: string, value: any, lifeTime: number, tags?: any[]): void;

    get(key: string): any;

    getByTags(tags: any[]): object;

    // ########################################

    remove(key: string): void;

    removeMulti(keys: any[]): void;

    removeByTag(tag: string): void;

    removeByTags(tags: any[]): void;

    // ########################################

    clear(): void;

    // ########################################
}
