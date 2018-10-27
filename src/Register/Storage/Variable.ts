import {BaseInterface} from "./BaseInterface";
import * as _ from 'lodash';

export class Variable implements BaseInterface {

    private storage: any = null;

    // ########################################

    constructor() {

    }

    // ########################################

    public delete(group: string, key: string): void {
        delete this.storage[group + key];
    }

    public get(group: string, key: string): Object {
        let value = this.storage[group + key];

        if (value == null) {
            return null;
        }

        return {
            group: group,
            key: key,
            value: value
        };
    }

    public isExist(group: string, key: string): boolean {
        let unit = this.get(group, key);

        return !_.isNull(unit);
    }

    public set(group: string, key: string, value: any): void {
        this.storage[group + key] = value;
    }

    // ########################################
}
