export class Matcher {

    private pattern: string = null;

    private url: string = null;

    // ########################################

    constructor(
        pattern: string,
        url: string
    ) {
        this.pattern = pattern;
        this.url = url;
    }

    // ########################################

    public match(): boolean {
        let regExp = new RegExp(this.pattern);

        if (this.url.match(regExp) === null) {
            return false;
        } else {
            return true;
        }
    }

    // ########################################
}