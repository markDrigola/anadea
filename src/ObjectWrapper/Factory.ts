import {Injectable} from '@angular/core';
import {ObjectWrapper} from '../ObjectWrapper';
import * as _ from 'lodash';


@Injectable()
export class Factory {

    // ########################################

    public create(data: Object = {}): ObjectWrapper {
        if (!_.isObject(data)) {
            throw new Error('Data is not valid.');
        }

        return new ObjectWrapper(data);
    }

    // ########################################
}
