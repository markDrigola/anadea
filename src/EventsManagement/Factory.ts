import {EventsManagement} from '../EventsManagement';
import {Factory as AboutEventFactory} from './Event/AboutEvent/Factory';

export class Factory {

    private eventAboutFactory: AboutEventFactory = null;

    // ########################################

    constructor(eventAboutFactory: AboutEventFactory) {
        this.eventAboutFactory = eventAboutFactory;
    }

    // ########################################

    public create(): EventsManagement {
        return new EventsManagement(this.eventAboutFactory);
    }

    // ########################################
}
