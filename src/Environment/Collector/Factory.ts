import {Collector} from "../Collector";
import {Browser} from "../Browser";
import {OperationSystem} from "../OperationSystem";
import {Locale} from "../Locale";
import {Screen} from "../Screen";
import {Inject, Injectable} from "@angular/core";

@Injectable()
export class Factory {

    private browser: Browser = null;

    private operationSystem: OperationSystem = null;

    private locale: Locale = null;

    private screen: Screen = null;

    // ########################################

    constructor(
        @Inject('Browser') browser: Browser,
        @Inject('OperationSystem') operationSystem: OperationSystem,
        @Inject('Locale') locale: Locale,
        @Inject('Screen') screen: Screen,
    ) {
        this.browser = browser;
        this.operationSystem = operationSystem;
        this.locale = locale;
        this.screen = screen;
    }

    // ########################################

    public create(browser: boolean = true, operationSystem: boolean = true, locale: boolean = true, screen: boolean = true): Collector {
        return new Collector(
            this.browser,
            this.operationSystem,
            this.locale,
            this.screen,
            browser,
            operationSystem,
            locale,
            screen
        );
    }

    // ########################################

}