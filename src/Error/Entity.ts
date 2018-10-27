export class Entity {

    private message: string;

    private stack: string;

    // ########################################

    constructor(
        message: string,
        stack: string
        )
    {
        this.message = message;
        this.stack = stack;
    }

    // ########################################

    public getMessage(): string {
        return this.message;
    }

    public getStack(): string {
        return this.stack;
    }

    // ########################################
}
