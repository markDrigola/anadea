import {Factory as ObjectWrapperFactory} from './ObjectWrapper/Factory';
import {ObjectWrapper} from './ObjectWrapper';

export class Metadata {

    private data: any;

    private objectWrapper: ObjectWrapper = null;

    private objectWrapperFactory: ObjectWrapperFactory = null;

    // ########################################

    constructor(
        data: any,
        objectWrapperFactory: ObjectWrapperFactory
    ) {
        this.objectWrapperFactory = objectWrapperFactory;
        this.data = data;
        this.objectWrapper = this.objectWrapperFactory.create(this.data);
    }

    // ########################################

    public get(path?: string): string | any[] | object {
        return this.objectWrapper.get(path);
    }

    // ########################################
}
