import {ErrorHandler, Injectable} from '@angular/core';
import {ErrorInterface} from './ErrorInterface';
import {Factory as EntityFactory} from '../Entity/Factory';
import {Factory as HandlerFactory} from '../Handler/Factory';
import {Entity} from "../Entity";

@Injectable()
export class Hook implements ErrorHandler {

    private entityFactory: EntityFactory = null;

    private handlerFactory: HandlerFactory = null;

    // ########################################

    constructor(
        entityFactory: EntityFactory,
        handlerFactory: HandlerFactory,
    ) {
        this.handlerFactory = handlerFactory;
        this.entityFactory = entityFactory;
    }

    // ########################################

    public handleError(error: ErrorInterface): void {
        let handler = this.handlerFactory.create();

        const entity: Entity = this.entityFactory.create(
            error.message,
            error.stack
        );

        handler.process(entity);
    }

    // ########################################
}
