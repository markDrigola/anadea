import {BaseInterface} from "./BaseInterface";
import {KeySlash} from "./Storage/Adapter/KeySlash";

export class Permanent implements BaseInterface {

    static readonly INFINITY_LIFETIME = 0;
    static readonly DEFAULT_LIFETIME = 3600;

    // ########################################

    private adapter: KeySlash = null;

    // ########################################

    constructor(
        adapter: KeySlash,
    ) {
        this.adapter = adapter;
    }

    // ########################################

    public has(key: string): boolean {
        return this.adapter.has(key);
    }

    public set(key: string, value: any, lifeTime: number = Permanent.DEFAULT_LIFETIME, tags: string[] = []): void {
        this.adapter.set(key, value, lifeTime, tags);
    }

    public get(key: string): any {
        return this.adapter.get(key);
    }

    public getByTags(tags: any[]): any {
        return this.adapter.getByTags(tags);
    }

    // ########################################

    public remove(key: string): void {
        this.adapter.remove(key);
    }

    public removeByTag(tag: string): void {
        this.adapter.removeByTag(tag);
    }

    public removeByTags(tags: any[]): void {
        this.adapter.removeByTags(tags);
    }

    public removeMulti(keys: any[]): void {
        this.adapter.removeMulti(keys);
    }

    // ########################################

    public removeByGroup(group): void {
        this.adapter.removeByGroup(group);
    }

    public removeByGroups(groups: string[]): void {
        this.adapter.removeByGroups(groups);
    }

    // ########################################

    public clear(): void {
        this.adapter.clear();
    }

    // ########################################
}
