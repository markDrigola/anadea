import {BaseAbstract} from './EventsManagement/Event/BaseAbstract';
import {BaseInterface} from './EventsManagement/Observer/BaseInterface';
import {AboutEvent} from './EventsManagement/Event/AboutEvent';
import {Factory as AboutEventFactory} from './EventsManagement/Event/AboutEvent/Factory';
import * as _ from 'lodash';

export class EventsManagement {

    private observersByNameAndAdditionalContext: Object = {};

    private enableEventAboutEventBefore: boolean = false;

    private enableEventAboutEventAfter: boolean = false;

    private aboutEventFactory: AboutEventFactory = null;

    // ########################################

    constructor(aboutEventFactory: AboutEventFactory) {
        this.aboutEventFactory = aboutEventFactory;
    }

    // ########################################

    public dispatch(event: BaseAbstract, additionalContext: string): void {
        if (this.enableEventAboutEventBefore) {

            const eventAbout = this.aboutEventFactory.create(event, additionalContext);
            this.internalDispatch(eventAbout, AboutEvent.ADDITIONAL_CONTEXT_BEFORE_EVENT);
        }

        this.internalDispatch(event, additionalContext);

        if (this.enableEventAboutEventAfter) {

            const eventAbout = this.aboutEventFactory.create(event, additionalContext);
            this.internalDispatch(eventAbout, AboutEvent.ADDITIONAL_CONTEXT_AFTER_EVENT);
        }
    }

    public attach(observer: BaseInterface, additionalContext: string): void {
        const eventName = observer.getEventName();

        const observers = this.findObservers(eventName, additionalContext);

        // TODO discuss this check
        const isAttached = _.find(observers, (unit) => {
            return _.isEqual(unit, observer);
        });

        if (isAttached) {
            throw new Error('Observer is already attached to this event and additional context.');
        }

        if (this.observersByNameAndAdditionalContext[eventName + additionalContext] === undefined) {
            this.observersByNameAndAdditionalContext[eventName + additionalContext] = [observer];
        } else {
            this.observersByNameAndAdditionalContext[eventName + additionalContext].push(observer);
        }

        this.actualizeEventAboutEventFlags();
    }

    public detach(observer: BaseInterface, additionalContext: string): void {
        const eventName = observer.getEventName();

        if (!this.observersByNameAndAdditionalContext[eventName + additionalContext]) {
            return;
        }

        const index = _.findIndex(this.observersByNameAndAdditionalContext[eventName + additionalContext], observer);

        if (index !== -1) {
            this.observersByNameAndAdditionalContext[eventName + additionalContext].splice(index, 1);
        }

        if (_.isEmpty(this.observersByNameAndAdditionalContext[eventName + additionalContext])) {
            delete this.observersByNameAndAdditionalContext[eventName + additionalContext];
        }
    }

    // ########################################

    private internalDispatch(event: BaseAbstract, additionalContext: string): void {
        const eventName = event.getClassName();

        const observers = this.findObservers(eventName, additionalContext);

        for (const observer of observers) {
            observer.process(event);
        }
    }

    private findObservers(eventName, additionalContext: string): Array<BaseInterface | any> {
        if (!this.observersByNameAndAdditionalContext[eventName + additionalContext]) {
            return [];
        }

        return this.observersByNameAndAdditionalContext[eventName + additionalContext];
    }

    private actualizeEventAboutEventFlags(): void {
        let enableEventAboutEventBefore = false;
        let enableEventAboutEventAfter  = false;

        if (this.findObservers('AboutEvent', AboutEvent.ADDITIONAL_CONTEXT_BEFORE_EVENT).length !== 0) {
            enableEventAboutEventBefore = true;
        }

        if (this.findObservers('AboutEvent', AboutEvent.ADDITIONAL_CONTEXT_AFTER_EVENT).length !== 0) {
            enableEventAboutEventAfter = true;
        }

        this.enableEventAboutEventBefore = enableEventAboutEventBefore;
        this.enableEventAboutEventAfter = enableEventAboutEventAfter;
    }

    // ########################################
}
