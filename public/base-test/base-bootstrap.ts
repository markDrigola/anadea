import {Injectable} from '@angular/core';
import {BaseTestTask} from './base-test-task';
import {Bootstrap} from '../../src/Bootstrap';

@Injectable()
export class BaseBootstrap {
    constructor(
        // private coreBootstrap: Bootstrap
    ) {
        // this.coreBootstrap.addAfterInitializeTask(new BaseTestTask());
    }

    initCoreBootstrap(): boolean {

       // return this.coreBootstrap.initialize();
    }
}
