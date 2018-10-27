export class AsyncLock {

    private asyncFlags: any[] = [];

    // ########################################

    public setAsyncLock(): void {
        this.asyncFlags.push(true);
    }

    public unsetAsyncLock(): void {
        this.asyncFlags.pop();
    }

    public isCompleted(): boolean {
        return this.asyncFlags.length === 0;
    }

    // ########################################
}
