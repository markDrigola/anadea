export class OperationSystem {

    private userAgent: string = null;

    private appVersion: string = null;

    private platform: string = null;

    private operationSystem: string = 'Operation system is not defined';

    // ########################################

    constructor(
        userAgent: string,
        appVersion: string,
        platform: string
    ) {
        this.userAgent = userAgent;
        this.appVersion = appVersion;
        this.platform = platform;
    }

    // ########################################

    public getOperationSystem(): string {
        let operationSystems = [
            {system:'Windows 10', regular:/(Windows 10.0|Windows NT 10.0)/},
            {system:'Windows 8.1', regular:/(Windows 8.1|Windows NT 6.3)/},
            {system:'Windows 8', regular:/(Windows 8|Windows NT 6.2)/},
            {system:'Windows 7', regular:/(Windows 7|Windows NT 6.1)/},
            {system:'Windows Vista', regular:/Windows NT 6.0/},
            {system:'Windows Server 2003', regular:/Windows NT 5.2/},
            {system:'Windows XP', regular:/(Windows NT 5.1|Windows XP)/},
            {system:'Windows 2000', regular:/(Windows NT 5.0|Windows 2000)/},
            {system:'Windows ME', regular:/(Win 9x 4.90|Windows ME)/},
            {system:'Windows 98', regular:/(Windows 98|Win98)/},
            {system:'Windows 95', regular:/(Windows 95|Win95|Windows_95)/},
            {system:'Windows NT 4.0', regular:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {system:'Windows CE', regular:/Windows CE/},
            {system:'Windows 3.11', regular:/Win16/},
            {system:'Android', regular:/Android/},
            {system:'Open BSD', regular:/OpenBSD/},
            {system:'Sun OS', regular:/SunOS/},
            {system:'Linux', regular:/(Linux|X11)/},
            {system:'iOS', regular:/(iPhone|iPad|iPod)/},
            {system:'Mac OS X', regular:/Mac OS X/},
            {system:'Mac OS', regular:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {system:'QNX', regular:/QNX/},
            {system:'UNIX', regular:/UNIX/},
            {system:'BeOS', regular:/BeOS/},
            {system:'OS/2', regular:/OS\/2/},
            {system:'Search Bot', regular:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];

        for (const iterator in operationSystems) {
            const unitSystem = operationSystems[iterator];

            if (unitSystem.regular.test(this.userAgent)) {

                this.operationSystem = unitSystem.system;
                break;
            }
        }

        switch (this.operationSystem) {
            case 'Mac OS X':
                let operationSystemMacVersion = /Mac OS X (10[\.\_\d]+)/.exec(this.userAgent)[1];

                this.operationSystem = this.operationSystem + ' ' + operationSystemMacVersion;
                break;

            case 'Android':
                let operationSystemAndroidVersion = /Android ([\.\_\d]+)/.exec(this.userAgent)[1];

                this.operationSystem = this.operationSystem + ' ' + operationSystemAndroidVersion;
                break;

            case 'iOS':
                let operationSystemIosVersion: any = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion);
                operationSystemIosVersion = operationSystemIosVersion[1] + '.' + operationSystemIosVersion[2] + '.' + (operationSystemIosVersion[3] | 0);

                this.operationSystem = this.operationSystem + ' ' + operationSystemIosVersion;
                break;
        }

        return this.operationSystem;
    }

    public getOperationSystemPlatform(): string {
        return this.platform;
    }

    // ########################################
}