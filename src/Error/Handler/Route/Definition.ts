export class Definition {

    private pattern: string = null;

    private tasksFactories: any[] = null;

    // ########################################

    constructor(
        pattern: string,
        tasksFactories: any[]
    ) {
        this.pattern = pattern;
        this.tasksFactories = tasksFactories;
    }

    // ########################################

    public getPattern(): string {
        return this.pattern;
    }

    public getTasksFactories(): any[] {
        return this.tasksFactories;
    }
    // ########################################
}
