import * as _ from 'lodash';

export class ObjectWrapper {

    private data: object | string;

    // ########################################

    constructor(data: object | string) {
        this.data = data;
    }

    // ########################################

    public get(path: string = null): string | object | any[] {
        if (path === null || path === '') {

            return this.data;
        }

        this.validatePath(path);

        let result = this.data;

        for (const node of this.explodePath(path)) {

            if (!_.isObject(result) || !_.has(result, node)) {
                throw new Error(path);
            }

            result = result[node];
        }

        return result;
    }

    public set(path = null, value: any): this {
        if (path === null) {

            this.data = value;

            return this;
        }

        this.validatePath(path);

        let storage = this.data;
        const explodedPath = this.explodePath(path);

        for (let i = 0; i < explodedPath.length; i++) {

            if (i === explodedPath.length - 1 && !_.has(storage, explodedPath[i])) {

                storage[explodedPath[i]] = value;
            } else if (i === explodedPath.length - 1 && _.has(storage, explodedPath[i])) {

                _.merge(storage[explodedPath[i]], value);
            } else if (_.has(storage, explodedPath[i])) {

                storage = storage[explodedPath[i]]
            } else if (!_.has(storage, explodedPath[i])) {

                storage[explodedPath[i]] = {};
                storage = storage[explodedPath[i]]
            }
        }

        return this;
    }

    public mergeData(obj: ObjectWrapper): this {
        if (!obj) {
            return this;
        }

        this.data = this.internalMerge(obj);

        return this;
    }

    // ########################################

    private validatePath(path: string): boolean {
        if (typeof path === 'string' && path.length > 2) {
            if (path[0] === '/' && path.substr(-1) === '/') {

                return true;
            }
        }

        throw new Error(path);
    }

    private explodePath(path: string): string[] {
        const result = [];

        for (const chunk of this.trimChars(path, '/').split('/')) {
            if (chunk === '' || chunk.trim() !== chunk) {

                throw new Error(path);
            }

            result.push(chunk);
        }

        return result;
    }

    private trimChars(str: string, char: string): string {
        if (str[0] === char) {
            str = str.substring(1);
        }

        if (str[str.length - 1] === char) {
            str = str.substring(0, str.length - 1);
        }

        return str;
    }

    private internalMerge(registrations: ObjectWrapper): ObjectWrapper {
        return _.merge(this.data, registrations.data);
    }

    // ########################################
}
