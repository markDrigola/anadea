import {Metadata} from '../Metadata';
import {Factory as ObjectWrapperFactory} from '../ObjectWrapper/Factory';
import * as _ from 'lodash';

export class Factory {

    private objectWrapperFactory: ObjectWrapperFactory = null;

    // ########################################

    constructor(objectWrapperFactory: ObjectWrapperFactory) {
        this.objectWrapperFactory = objectWrapperFactory;
    }

    // ########################################

    public create(data = {}): Metadata {
        if (!_.isObject(data)) {
            throw new Error('Data is not valid.');
        }

        return new Metadata(data, this.objectWrapperFactory);
    }

    // ########################################
}
