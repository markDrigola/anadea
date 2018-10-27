import {DisplayToModal} from "../DisplayToModal";
import {Injectable, Injector} from "@angular/core";
import {BaseFactoryInterface} from "../BaseFactoryInterface";
import {MatDialog} from "@angular/material";

@Injectable()
export class Factory implements BaseFactoryInterface {

    private injector: Injector;

    private matDialog: MatDialog = null;

    // ########################################

    constructor(
        injector: Injector,
    ) {
        this.injector = injector;
    }

    // ########################################

    public create(properties: any): DisplayToModal {
        this.matDialog = this.injector.get(MatDialog);

        return new DisplayToModal(this.matDialog, properties)
    }

    // ########################################
}
