import {METADATA} from '../metadata';
import {Factory as ObjectWrapperFactory} from '../src/ObjectWrapper/Factory';
import {Factory as MetadataFactory} from '../src/Metadata/Factory';
import {Metadata} from '../src/Metadata';
import {Factory as DisplayToModalFactory} from "../src/Error/Task/DisplayToModal/Factory";
import {Factory as LoggingFactory} from "../src/Error/Task/Logging/Factory";

export function AngularFactoryFunctionMetadata(objectWrapperFactory: ObjectWrapperFactory, metadata) {
    return new MetadataFactory(
        objectWrapperFactory
    ).create(metadata);
}

export const Providers = [
    {
        provide: 'CORE_METADATA_DATA',
        useValue: METADATA
    },
    {
        provide: 'CORE_METADATA',
        useFactory: AngularFactoryFunctionMetadata,
        deps: [ObjectWrapperFactory, 'CORE_METADATA_DATA']
    },
];
