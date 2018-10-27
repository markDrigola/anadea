import {BaseInterface} from "../BaseInterface";
import {Factory as DateTimeCurrentFactory} from "../../DateTime/Current/Factory";
import * as _ from "lodash";
import {Variable} from "./Variable";

export class Local implements BaseInterface {

    static readonly UNIQUE_TAGS_TIMESTAMP_PREFIX = '_tags_timestamp_';
    static readonly UNIQUE_TAGS_PREFIX = '_tags_';
    static readonly UNIQUE_CACHE_PREFIX = '_unique_';
    static readonly INFINITY_LIFETIME = 0;
    static readonly DEFAULT_LIFETIME = 3600;

    // ########################################

    private localStorage: Storage = null;

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    private keys: object = {};

    private tagsTimestamp: object = {};

    private tagsKeys: object = {};

    // ########################################

    constructor(
        localStorage: Storage,
        dateTimeCurrentFactory: DateTimeCurrentFactory
    ) {
        this.localStorage = localStorage;
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
    }

    public has(key: string): boolean {
        return this.get(key) !== null;
    }

    public get(key: string): any {
        let cache = JSON.parse(this.localStorage.getItem(Local.UNIQUE_CACHE_PREFIX + 'cache'));

        if (cache === null || !cache[key]) {
            return null;
        }

        let data = cache[key];

        if ((data['metadata'] && data['metadata']['expire_time'] !== null) &&
            this.dateTimeCurrentFactory.create().getTimeStamp() > data['metadata']['expire_time']) {

            this.remove(key);

            return null;
        }

        if (_.isEmpty(data['metadata']['tags'])) {
            return data['data'];
        }

        let createKeyTime = data['metadata']['create_time'];
        let tagsTimestamp = JSON.parse(this.localStorage.getItem(Local.UNIQUE_TAGS_TIMESTAMP_PREFIX + 'cache'));

        data['metadata']['tags'].forEach((tag) => {
            if (!tagsTimestamp[tag]) {
                return null;
            }

            if (createKeyTime < tagsTimestamp[tag]) {
                this.remove(key);

                return null;
            }
        });

        return data['data'];
    }

    public set(key: string, value: any, lifeTime: number = Local.DEFAULT_LIFETIME, tags: any[] = []): void {
        let cache: string | object = this.localStorage.getItem(Local.UNIQUE_CACHE_PREFIX + 'cache');
        //
        if (cache === null) {
            cache = {};
        } else {
            cache = JSON.parse(cache);
        }

        let uniqueTags = this.arrayUnique(tags);

        uniqueTags.forEach((tag) => {
            let tagsTimestamp = JSON.parse(this.localStorage.getItem(Local.UNIQUE_TAGS_TIMESTAMP_PREFIX + 'cache'));
            let tagsKeys = JSON.parse(this.localStorage.getItem(Local.UNIQUE_TAGS_PREFIX + 'cache'));

            if (tagsTimestamp === null) {
                tagsTimestamp = {};
            }

            if (tagsKeys === null) {
                tagsKeys = {};
            }

            if (!tagsTimestamp[tag]) {
                tagsTimestamp[tag] = this.dateTimeCurrentFactory.create().getTimeStamp();

                this.localStorage.setItem(Local.UNIQUE_TAGS_TIMESTAMP_PREFIX + 'cache', JSON.stringify(tagsTimestamp));
            }

            if (!tagsKeys[tag]) {
                tagsKeys[tag] = {[key]: true};
            } else {
                tagsKeys[tag][key] = true;
            }

            this.localStorage.setItem(Local.UNIQUE_TAGS_PREFIX + 'cache', JSON.stringify(tagsKeys));
        });

        let data = {
            data: value,
            metadata: {
                key: key,
                tags: uniqueTags,
                expire_time: lifeTime == Variable.INFINITY_LIFETIME ? null : this.dateTimeCurrentFactory.create().getTimeStamp() + lifeTime,
                create_time: this.dateTimeCurrentFactory.create().getTimeStamp()
            }
        };

        cache[key] = data;

        this.localStorage.setItem(Local.UNIQUE_CACHE_PREFIX + 'cache', JSON.stringify(cache));
    }

    public getByTags(tags: any[]): object {
        let tagsKeys = JSON.parse(this.localStorage.getItem(Local.UNIQUE_TAGS_PREFIX + 'cache'));

        if (_.isEmpty(tags)) {
            return [];
        }

        let keys = [];
        tags.forEach((tag) => {
            if (!tagsKeys[tag]) {
                return;
            }

            keys = this.arrayUnique(keys.concat(Object.keys(tagsKeys[tag])));
        });

        if (_.isEmpty(keys)) {
            return [];
        }

        let result = {};
        keys.forEach((key) => {
            let data = this.get(key);
            if (data === null) {
                return;
            }

            result[key] = data;
        });

        return result;
    }

    // ########################################

    public clear(): void {
        this.localStorage.removeItem(Local.UNIQUE_CACHE_PREFIX + 'cache');
        this.localStorage.removeItem(Local.UNIQUE_TAGS_PREFIX + 'cache');
        this.localStorage.removeItem(Local.UNIQUE_TAGS_TIMESTAMP_PREFIX + 'cache');
    }

    // ########################################

    public remove(key: string): void {
        let cache = JSON.parse(this.localStorage.getItem(Local.UNIQUE_CACHE_PREFIX + 'cache'));

        delete cache[key];

        this.localStorage.setItem(Local.UNIQUE_CACHE_PREFIX + 'cache', JSON.stringify(cache));
    }

    public removeByTag(tag: string): void {
        let tagsKeys = JSON.parse(this.localStorage.getItem(Local.UNIQUE_TAGS_PREFIX + 'cache'));
        let tagsTimestamp = JSON.parse(this.localStorage.getItem(Local.UNIQUE_TAGS_TIMESTAMP_PREFIX + 'cache'));

        delete tagsKeys[tag];
        delete tagsTimestamp[tag];

        this.localStorage.setItem(Local.UNIQUE_TAGS_PREFIX + 'cache', JSON.stringify(tagsKeys));
        this.localStorage.setItem(Local.UNIQUE_TAGS_TIMESTAMP_PREFIX + 'cache', JSON.stringify(tagsTimestamp));
    }

    public removeByTags(tags: any[]): void {
        tags.forEach((tag) => {
            this.removeByTag(tag);
        })
    }

    public removeMulti(keys: any[]): void {
        keys.forEach( (key) => {
            this.remove(key);
        })
    }

    // ########################################

    private arrayUnique(array: any[]): any[] {
        let uniqueObject = {};
        let uniqueArray = [];

        array.forEach((tag, index) => {
            if (!uniqueObject[tag]) {
                uniqueObject[tag] = tag;
                uniqueArray.push(tag);
            }
        });

        return uniqueArray;
    }

    // ########################################
}
