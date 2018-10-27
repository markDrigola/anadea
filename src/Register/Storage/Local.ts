import {BaseInterface} from "./BaseInterface";
import * as _ from 'lodash';

export class Local implements BaseInterface {

    private localStorage: Storage = null;

    // ########################################

    constructor(
        localStorage: Storage
    ) {
        this.localStorage = localStorage;
    }

    // ########################################

    public delete(group: string, key: string): void {
        this.localStorage.removeItem(group + key)
    }

    public get(group: string, key: string): Object {
        let value = JSON.parse(this.localStorage.getItem(group + key));

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
        this.localStorage.setItem(group + key, JSON.stringify(value));
    }

    // ########################################
}
