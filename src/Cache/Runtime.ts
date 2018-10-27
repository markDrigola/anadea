import {KeySlash} from "./Storage/Adapter/KeySlash";
import {Controller as CacheController} from "./Runtime/Controller";
import {BaseInterface} from "./BaseInterface";

export class Runtime implements BaseInterface{

    static readonly DEFAULT_LIFETIME = 0;

    // ########################################

    private adapter: KeySlash = null;

    private controller: CacheController = null;

    // ########################################

    constructor(
        adapter: KeySlash,
        controller: CacheController
    ) {
        this.adapter = adapter;
        this.controller = controller;
    }

    // ########################################

    public has(key: string): boolean {
        if (!this.controller.isCacheEnabled()) {
            return false;
        }

        return this.adapter.has(key);
    }

    public set(key: string, value: any, lifeTime: number = Runtime.DEFAULT_LIFETIME, tags: string[] = []): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.set(key, value, lifeTime, tags);
    }

    public get(key): any {
        if (!this.controller.isCacheEnabled()) {
            return null;
        }

        return this.adapter.get(key);
    }

    public getByTags(tags: string[]): any {
        if (!this.controller.isCacheEnabled()) {
            return [];
        }

        return this.adapter.getByTags(tags);
    }

    public remove(key): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.remove(key);
    }

    public removeMulti(keys: string[]): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.removeMulti(keys);
    }

    public removeByTag(tag): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.removeByTag(tag);
    }

    public removeByTags(tags: string[]): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.removeByTags(tags);
    }

    // ########################################

    public removeByGroup(group): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.removeByGroup(group);
    }

    public removeByGroups(groups: string[]): void {
        if (!this.controller.isCacheEnabled()) {
            return;
        }

        this.adapter.removeByGroups(groups);
    }

    // ########################################

    public clear(): void {
        this.adapter.clear();
    }

    // ########################################
}
