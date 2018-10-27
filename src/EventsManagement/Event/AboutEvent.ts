import {BaseAbstract} from './BaseAbstract';

export class AboutEvent extends BaseAbstract {

    static readonly ADDITIONAL_CONTEXT_BEFORE_EVENT = 'before_event';
    static readonly ADDITIONAL_CONTEXT_AFTER_EVENT  = 'after_event';

    // ########################################

    private originalEvent: BaseAbstract = null;

    private originalEventAdditionalContext: string = null;

    // ########################################

    constructor(className: string, originalEvent: BaseAbstract, originalEventAdditionalContext: string) {
        super(className);

        this.originalEvent = originalEvent;
        this.originalEventAdditionalContext = originalEventAdditionalContext;
    }

    // ########################################

    public getOriginalEvent(): BaseAbstract {
        return this.originalEvent;
    }

    public getOriginalEventAdditionalContext(): string {
        return this.originalEventAdditionalContext;
    }

    // ########################################
}
