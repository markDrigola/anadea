export class Task {

    private factory = null;

    private properties = {};

    private interval = null;

    // ########################################

    constructor(
        props: object
    ) {
        this.factory = props['factory'];
        this.properties = props['properties'];
        this.interval = props['interval'];
    }

    // ########################################

    public getFactory(): {create: Function} {
        return this.factory;
    }

// ########################################

    public getProperties(): object {
        return this.properties;
    }

// ########################################

    public hasInterval(): boolean {
        return this.getInterval() !== null;
    }

    public getInterval(): number {
        return this.interval;
    }

    // ########################################
}
