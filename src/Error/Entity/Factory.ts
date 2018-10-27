import {Entity} from "../Entity";

export class Factory {

    // ########################################

    public create(message: string, stack: string): Entity {
        return new Entity(
            message,
            stack
        );
    }

    // ########################################
}
