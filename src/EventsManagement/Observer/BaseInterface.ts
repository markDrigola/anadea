import {BaseAbstract} from '../Event/BaseAbstract';

export interface BaseInterface {

    // ########################################

    process(event: BaseAbstract);

    getEventName(): string;

    // ########################################
}
