import {BaseInterface} from "../src/Error/Task/BaseInterface";
import {Entity} from "../src/Error/Entity";

export class TestErrorAdditionalTask implements BaseInterface {

    process(entity: Entity): void {
        console.log(entity);
    }

}
