export class Browser {

    private userAgent: string = null;

    private appName: string = null;

    private browserName: string = 'Browser name is not defined';

    private browserVersion: string = 'Browser version is not defined';

    private browserMajorVersion: number | string = 'Browser major version is not defined';

    // ########################################

    constructor(
        userAgent: string,
        appName: string
    ) {
        this.userAgent = userAgent;
        this.appName = appName;
    }

    // ########################################

    public getBrowserName(): string {
        // Opera
        if (this.userAgent.indexOf('Opera') != -1) {
            this.browserName = 'Opera';
        }
        // Opera Next
        else if (this.userAgent.indexOf('OPR') != -1) {
            this.browserName = 'Opera Next';
        }
        // Edge
        else if (this.userAgent.indexOf('Edge') != -1) {
            this.browserName = 'Microsoft Edge';
        }
        // MSIE
        else if (this.userAgent.indexOf('MSIE') != -1) {
            this.browserName = 'Microsoft Internet Explorer';
        }
        // Chrome
        else if (this.userAgent.indexOf('Chrome') != -1) {
            this.browserName = 'Chrome';
        }
        // Safari
        else if (this.userAgent.indexOf('Safari') != -1) {
            this.browserName = 'Safari';
        }
        // Firefox
        else if (this.userAgent.indexOf('Firefox') != -1) {
            this.browserName = 'Firefox';
        }
        // MSIE 11+
        else if (this.userAgent.indexOf('Trident/') != -1) {
            this.browserName = 'Microsoft Internet Explorer 11+';
        }
        // Other browsers
        else if (this.userAgent.lastIndexOf(' ') + 1 < this.userAgent.lastIndexOf('/')) {
            this.browserName = 'Other browsers' + this.appName;
        }

        return this.browserName;
    }

    public getBrowserVersion(): string {
        let versionPosition;

        // Opera
        if ((versionPosition = this.userAgent.indexOf('Opera')) != -1) {
            let versionStr = this.userAgent.substring(versionPosition + 6);

            this.browserVersion = versionStr.split(' ')[0];

            if ((versionPosition = this.userAgent.indexOf('Version')) != -1) {
                let versionStr = this.userAgent.substring(versionPosition + 8);

                this.browserVersion = versionStr.split(' ')[0];
            }
        }
        // Opera Next
        else if ((versionPosition = this.userAgent.indexOf('OPR')) != -1) {
            let versionStr = this.userAgent.substring(versionPosition + 4);

            this.browserVersion = versionStr.split(' ')[0];
        }
        // Edge
        else if ((versionPosition = this.userAgent.indexOf('Edge')) != -1) {
            let versionStr = this.userAgent.substring(versionPosition + 5);

            this.browserVersion = versionStr.split(' ')[0];
        }
        // MSIE
        else if (this.userAgent.indexOf('MSIE') != -1) {
            let versionStr = this.userAgent.substring(versionPosition + 5);

            this.browserVersion = versionStr.split(' ')[0];
        }
        // Chrome
        else if (this.userAgent.indexOf('Chrome') != -1) {
            let versionStr = this.userAgent.substring(this.userAgent.indexOf('Chrome') + 7);

            this.browserVersion = versionStr.split(' ')[0];
        }
        // Safari
        else if ((versionPosition = this.userAgent.indexOf('Safari')) != -1) {
            let versionStr = this.userAgent.substring(versionPosition + 7);

            this.browserVersion = versionStr.split(' ')[0];
            if ((versionPosition = this.userAgent.indexOf('Version')) != -1) {
                let versionStr = this.userAgent.substring(versionPosition + 8);

                this.browserVersion = versionStr.split(' ')[0];
            }
        }
        // Firefox
        else if ((versionPosition = this.userAgent.indexOf('Firefox')) != -1) {

            let versionStr = this.userAgent.substring(versionPosition + 8);

            this.browserVersion = versionStr.split(' ')[0];
        }
        // MSIE 11+
        else if (this.userAgent.indexOf('Trident/') != -1) {

            let versionStr = this.userAgent.substring(versionPosition + 3);

            this.browserVersion = versionStr.split(' ')[0];
        }

        return this.browserVersion;
    }

    public getBrowserMajorVersion(): number {
        return this.browserMajorVersion = parseInt('' + this.getBrowserVersion(), 10);
    }

    // ########################################
}
