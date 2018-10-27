import {Factory as EventManagerFactory} from '../src/EventsManagement/Factory';
import {Factory as AboutEventFactory} from '../src/EventsManagement/Event/AboutEvent/Factory';
import {EventsManagement} from '../src/EventsManagement';

export function AngularFactoryFunctionEventManager(aboutEventFactory: AboutEventFactory) {
    return new EventManagerFactory(
        aboutEventFactory
    ).create();
}

export const Providers = [
    {
        provide: 'EventsManagement',
        useFactory: AngularFactoryFunctionEventManager,
        deps: [AboutEventFactory]
    },
    AboutEventFactory
];
