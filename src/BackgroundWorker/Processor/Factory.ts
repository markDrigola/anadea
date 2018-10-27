import {Processor} from "../Processor";
import {Inject, Injectable, Optional} from "@angular/core";
import {Factory as DateTimeCurrentFactory} from "../../DateTime/Current/Factory";
import {Metadata} from "../../Metadata";
import {Task} from "../Definition/Task";
import {Factory as TaskFactory} from "../Definition/Task/Factory";

@Injectable()
export class Factory {

    private coreMetadata: Metadata = null;

    private skeletonMetadata: Metadata = null;

    private taskFactory: TaskFactory = null;

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    // ########################################

    constructor(
        @Optional() @Inject('CORE_METADATA') coreMetadata: Metadata,
        @Optional() @Inject('SKELETON_METADATA') skeletonMetadata: Metadata,
        taskFactory: TaskFactory,
        dateTimeCurrentFactory: DateTimeCurrentFactory
    ) {

        this.coreMetadata = coreMetadata;
        this.skeletonMetadata = skeletonMetadata;
        this.taskFactory = taskFactory;
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
    }

    // ########################################

    public create(): Processor {
        let definitions: any[] = [];

        if(this.coreMetadata !== null && this.coreMetadata.get('/background_worker/')) {
            definitions = definitions.concat(this.coreMetadata.get('/background_worker/'));
        }

        if (this.skeletonMetadata !== null && this.skeletonMetadata.get('/background_worker/')) {
            definitions = definitions.concat(this.skeletonMetadata.get('/background_worker/'));
        }

        let taskDefinitions: Task[] = [];

        (<any[]>definitions).forEach((definition) => {
            taskDefinitions.push(this.taskFactory.create(definition));
        });

        return new Processor(
            taskDefinitions,
            this.dateTimeCurrentFactory,
        );
    }

    // ########################################
}
