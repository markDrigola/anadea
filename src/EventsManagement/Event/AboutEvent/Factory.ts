import {BaseAbstract} from '../BaseAbstract';
import {AboutEvent} from '../AboutEvent';

export class Factory {
    // ########################################

    public create(originalEvent: BaseAbstract, originalEventAdditionalContext): AboutEvent {
        return new AboutEvent('AboutEvent', originalEvent, originalEventAdditionalContext);
    }

    // ########################################
}
