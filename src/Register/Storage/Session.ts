import {BaseInterface} from "./BaseInterface";
import * as _ from 'lodash';

export class Session implements BaseInterface {

    private sessionStorage: Storage = null;

    // ########################################

    constructor(
        sessionStorage: Storage
    ) {
        this.sessionStorage = sessionStorage;
    }

    // ########################################

    public delete(group: string, key: string): void {
        this.sessionStorage.removeItem(group + key);
    }

    public get(group: string, key: string): Object {
        let value = JSON.parse(this.sessionStorage.getItem(group + key));

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
        this.sessionStorage.setItem(group + key, JSON.stringify(value));
    }

    // ########################################
}
