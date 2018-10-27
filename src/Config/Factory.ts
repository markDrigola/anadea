import {Inject, Injectable, Optional} from '@angular/core';
import {Factory as ObjectWrapperFactory} from '../ObjectWrapper/Factory';
import {Config} from '../Config';
import {ObjectWrapper} from '../ObjectWrapper';
import {Registration} from './Registration';

@Injectable()
export class Factory {

    private objectWrapperFactory: ObjectWrapperFactory = null;

    private registrations: Registration[];

    // ########################################

    constructor(
        objectWrapperFactory: ObjectWrapperFactory,
        @Optional() @Inject('CONFIG_REGISTRATIONS') registrations: Registration[]
    ) {
        this.objectWrapperFactory = objectWrapperFactory;
        this.registrations = registrations;
    }

    // ########################################

    public create(): Config {
        const objectWrapper: ObjectWrapper = this.objectWrapperFactory.create();

        for (const unit of this.registrations) {

            const registrationUnit = unit.getData();
            const registrationUnitKeys = Object.keys(registrationUnit);

            for (const key of registrationUnitKeys) {
                objectWrapper.set(key, registrationUnit[key]);
            }
        }

        return new Config (
            objectWrapper.get(),
            this.objectWrapperFactory
        );
    }

    // ########################################
}
