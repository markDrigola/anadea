import {Browser} from "./Browser";
import {OperationSystem} from "./OperationSystem";
import {Locale} from "./Locale";
import {Screen} from "./Screen";

export class Collector {

    private browser: Browser = null;

    private operationSystem: OperationSystem = null;

    private locale: Locale = null;

    private screen: Screen = null;

    private optionBrowser: boolean = null;

    private optionsOperationSystem: boolean = null;

    private optionsLocale: boolean = null;

    private optionsScreen: boolean = null;

    // ########################################

    constructor(
        browser: Browser,
        operationSystem: OperationSystem,
        locale: Locale,
        screen: Screen,
        optionBrowser: boolean,
        optionsOperationSystem: boolean,
        optionsLocale: boolean,
        optionsScreen: boolean,
    ) {
        this.browser = browser;
        this.operationSystem = operationSystem;
        this.locale = locale;
        this.screen = screen;
        this.optionBrowser = optionBrowser;
        this.optionsOperationSystem = optionsOperationSystem;
        this.optionsLocale = optionsLocale;
        this.optionsScreen = optionsScreen;
    }

    // ########################################

    public getInfo(): Object {
        let info: Object = {};

        if (this.optionBrowser) {
            info['browser'] = this.getBrowserInfo();
        }

        if (this.optionsOperationSystem) {
            info['operationSystem'] = this.getOperationSystemInfo();
        }

        if (this.optionsLocale) {
            info['locale'] = this.getLocaleInfo();
        }

        if (this.optionsScreen) {
            info['screen'] = this.getScreenInfo();
        }

        return info;
    }

    // ########################################

    private getBrowserInfo(): object {
        return {
            name: this.browser.getBrowserName(),
            version: this.browser.getBrowserVersion(),
            majorVersion: this.browser.getBrowserMajorVersion()
        }
    }

    private getOperationSystemInfo(): object {
        return {
            system: this.operationSystem.getOperationSystem(),
            platform: this.operationSystem.getOperationSystemPlatform()
        }
    }

    private getLocaleInfo(): object {
        return {
            date: this.locale.getDate(),
            language: this.locale.getLanguage(),
            timeZone: this.locale.getTimeZone()
        }
    }

    private getScreenInfo(): object {
        return {
            size: this.screen.getScreenSize()
        }
    }

    // ########################################
}