export class Screen {

    private screenHeight: number = null;

    private screenWidth: number = null;

    // ########################################

    constructor(
        screenHeight: number,
        screenWidth: number
    ) {
        this.screenHeight = screenHeight;
        this.screenWidth = screenWidth;
    }

    // ########################################

    public getScreenSize(): string {
        return `${this.screenWidth} x ${this.screenHeight}`;
    }

    // ########################################
}
