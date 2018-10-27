import {Screen} from "../Screen";

export class Factory {

    // ########################################

    public create(): Screen {
        return new Screen(
            screen.height,
            screen.width
        );
    }

    // ########################################
}