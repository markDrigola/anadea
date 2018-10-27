import {BaseInterface} from "../../BaseInterface";
import * as _ from "lodash";

export class KeySlash implements BaseInterface {

    static readonly INFINITY_LIFETIME = 0;
    static readonly DEFAULT_LIFETIME = 3600;

    // ########################################

    static readonly GROUP_TAG_PREFIX = '#tag_group#';

    // ########################################

    private storage: BaseInterface = null;

    // ########################################

    constructor(storage: BaseInterface) {
        this.storage = storage;
    }

    // ########################################

    public get(key: string): any {
        this.validateKey(key);

        return this.storage.get(key);
    }

    public getByTags(tags: any[]): object {
        return this.storage.getByTags(tags);
    }

    public has(key: string): boolean {
        this.validateKey(key);

        return this.storage.has(key);
    }

    public set(key: string, value: any, lifeTime: number = KeySlash.DEFAULT_LIFETIME, tags: any[] = []): void {
        this.validateKey(key);

        let groups = this.explodePath(key, '/');
        groups.pop();

        let tagsAll = [];
        if (groups.length > 0) {
            let groupTags = [
                '/' + groups.shift() + '/'
            ];

            groups.forEach((group, index) => {
                groupTags.push('/' + this.trimChars(groupTags[index], '/') + '/' + group + '/');
            });

            let groupPrefix = KeySlash.GROUP_TAG_PREFIX;

            groupTags.forEach((group, index) => {
                groupTags[index] = groupPrefix + groupTags[index];
            });

            tagsAll = _.concat(tags, groupTags);
        }

        this.storage.set(key, value, lifeTime, tagsAll);
    }

    // ########################################

    public remove(key: string): void {
        this.validateKey(key);

        this.storage.remove(key);
    }

    public removeByTag(tag: string): void {
        this.storage.removeByTag(tag);
    }

    public removeByTags(tags: any[]): void {
        this.storage.removeByTags(tags);
    }

    public removeMulti(keys: any[]): void {
        keys.forEach((key) => {
            this.validateKey(key);
        });

        this.storage.removeMulti(keys);
    }

    // ########################################

    public clear(): void {
        this.storage.clear();
    }

    // ########################################

    private validateKey(key: string): boolean {
        if (typeof key === 'string' && key.length > 2) {
            if (key[0] === '/' && key.substr(-1) === '/') {

                return true;
            }
        }

        throw new Error(`Key '${key}' is not valid.`);
    }

    private explodePath(path: string, char: string): string[] {
        const result = [];

        for (const chunk of this.trimChars(path, char).split(char)) {
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

    // ########################################

    public removeByGroup(group): void {
        this.validateKey(group);

        this.removeByTag(KeySlash.GROUP_TAG_PREFIX + group);
    }

    public removeByGroups(groups: any[]): void {
        let preparedGroups = [];

        groups.forEach((group) => {
            this.validateKey(group);

            preparedGroups.push(KeySlash.GROUP_TAG_PREFIX + group);
        });
    }
}
