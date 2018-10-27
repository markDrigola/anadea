import * as _ from 'lodash';

export abstract class BaseAbstract {

    private data = {};

    private className: string;

    // ########################################

    constructor(className: string) {
        this.className = className;
    }

    // ########################################

    public getClassName(): string {
        return this.className;
    }

    public getData(): Object {
        return this.data;
    }

    public setData(data: any): this {
        this.data = data;

        return this;
    }

    public getDataByKey(key: string): any {
        if (!this.hasKey(key)) {
            throw new Error(`Key '${key}' is not exist.`);
        }

        return this.data[key];
    }

    public appendKey(key: string, value: any): this {
        this.data[key] = value;

        return this;
    }

    public hasKey(key): boolean {
        return _.has(this.data, key);
    }

    // ########################################
}
