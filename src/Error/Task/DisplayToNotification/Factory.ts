import {Injectable, Injector} from "@angular/core";
import {DisplayToNotification} from "../DisplayToNotification";
import {BaseFactoryInterface} from "../BaseFactoryInterface";
import {MatSnackBar} from "@angular/material";

@Injectable()
export class Factory implements BaseFactoryInterface {

    private injector: Injector;

    private matSnackBar: MatSnackBar;

    // ########################################

    constructor(
        injector: Injector
    ) {
        this.injector = injector;
    }

    // ########################################

    public create(properties: {}): DisplayToNotification {
        this.matSnackBar = this.injector.get(MatSnackBar);

        return new DisplayToNotification(this.matSnackBar, properties)
    }

    // ########################################
}
