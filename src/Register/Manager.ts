import {BaseInterface as StorageBaseInterface} from "./Storage/BaseInterface";
import * as _ from 'lodash';

export class Manager {

    private storage: StorageBaseInterface = null;

    // ########################################

    constructor(
        storage: StorageBaseInterface,
    ) {
        this.storage = storage;
    }

    // ########################################

    public isExist(group: string, key: string): boolean {
        if (!_.isString(group)) {
            throw new Error('Group must be a string type.');
        }

        if (!_.isString(key)) {
            throw new Error('Key must be a string type.');
        }

        return this.storage.isExist(group, key);
    }

    public set(group: string, key: string, value: any): void {
        this.storage.set(group, key, value);
    }

    public get(group, key): Object {
        if (!this.isExist(group, key)) {
            throw new Error(`Record with group '${group}' and key '${key}' is not found.`);
        }

        return this.storage.get(group, key);
    }

    public delete(group: string, key: string): void {
        if (!this.isExist(group, key)) {
            return;
        }

        this.storage.delete(group, key);
    }

    // ########################################
}
