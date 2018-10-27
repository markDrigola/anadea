import {Factory as ObjectWrapperFactory} from './ObjectWrapper/Factory';
import {ObjectWrapper} from './ObjectWrapper';

export class Config {

    private objectWrapper: ObjectWrapper = null;

    private objectWrapperFactory: ObjectWrapperFactory = null;

    private data: any;

    // ########################################

    constructor(
        data: any,
        objectWrapperFactory: ObjectWrapperFactory
    ) {
        this.data = data;
        this.objectWrapperFactory = objectWrapperFactory;

        this.objectWrapper = this.objectWrapperFactory.create(this.data);
    }

    // ########################################

    public get(path?: string): string | object  | any[] {
        return this.objectWrapper.get(path);
    }

    // ########################################
}
