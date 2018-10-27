export class Success {

    private data: any = null;

    // ########################################

    constructor(
        data: any
    ) {
        this.data = data;
    }

    // ########################################

    public getData(): any {
        return this.data;
    }

    // ########################################
}
