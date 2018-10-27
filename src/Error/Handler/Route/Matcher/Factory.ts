import {Matcher} from "../Matcher";

export class Factory {

    // ########################################

    public create(pattern: string, url: string): Matcher {
        return new Matcher(
            pattern,
            url
        );
    }

    // ########################################
}
