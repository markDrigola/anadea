export class Controller {

    private cacheEnabled: boolean = true;

    // ########################################

    public isCacheEnabled(): boolean {
        return this.cacheEnabled;
    }

    // ########################################

    public enableCache(): void {
        this.cacheEnabled = true;
    }

    public disableCache(): void {
        this.cacheEnabled = false;
    }

    // ########################################
}
