import {Locale} from "../Locale";

export class Factory {

    // ########################################

    public create(): Locale {
        return new Locale(
            navigator.language
        );
    }

    // ########################################
}