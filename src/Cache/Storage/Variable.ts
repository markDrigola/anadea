import {BaseInterface} from "../BaseInterface";
import {Factory as DateTimeCurrentFactory} from "../../DateTime/Current/Factory";
import * as _ from "lodash";

export class Variable implements BaseInterface {

    static readonly INFINITY_LIFETIME = 0;
    static readonly DEFAULT_LIFETIME = 3600;

    // ########################################

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    private keys: object = {};

    private tagsTimestamp: object = {};

    private tagsKeys: object = {};

    // ########################################

    constructor(
        dateTimeCurrentFactory: DateTimeCurrentFactory
    ) {
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
    }

    // ########################################

    public has(key: string): boolean {
        return this.get(key) !== null;
    }

    public set(key: string, value: any, lifeTime: number = Variable.DEFAULT_LIFETIME, tags: any[] = []): void {
        let uniqueTags = this.arrayUnique(tags);

        uniqueTags.forEach((tag) => {
            if (!this.tagsTimestamp[tag]) {
                this.tagsTimestamp[tag] = this.dateTimeCurrentFactory.create().getTimeStamp();
            }

            if (!this.tagsKeys[tag]) {
                this.tagsKeys[tag] = {[key]: true};
            } else {
                this.tagsKeys[tag][key] = true;
            }
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

        this.keys[key] = data;
    }

    public get(key: string): any {
        if (!(this.keys[key])) {
            return null;
        }

        let data = this.keys[key];

        if ((data['metadata'] && data['metadata']['expire_time'] !== null) &&
            this.dateTimeCurrentFactory.create().getTimeStamp() > data['metadata']['expire_time']) {

            this.remove(key);

            return null;
        }

        if (_.isEmpty(data['metadata']['tags'])) {
            return data['data'];
        }

        let createKeyTime = data['metadata']['create_time'];
        data['metadata']['tags'].forEach((tag) => {
            if (!this.tagsTimestamp[tag]) {
                return null;
            }

            if (createKeyTime < this.tagsTimestamp[tag]) {
                this.remove(key);

                return null;
            }
        });

        return data['data'];
    }

    public clear(): void {
        this.keys = {};
        this.tagsTimestamp = {};
        this.tagsKeys = {};
    }

    public getByTags(tags: any[]): object {
        if (_.isEmpty(tags)) {
            return [];
        }

        let keys = [];
        tags.forEach((tag) => {
            if (!this.tagsKeys[tag]) {
                return;
            }

            keys = this.arrayUnique(keys.concat(Object.keys(this.tagsKeys[tag])));
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

    public remove(key: string): void {
        delete this.keys[key];
    }

    public removeByTag(tag: string): void {
        delete this.tagsTimestamp[tag];
        delete this.tagsKeys[tag];
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

