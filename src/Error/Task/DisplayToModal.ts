import {BaseInterface} from "./BaseInterface";
import {Entity} from "../Entity";
import {ModalComponent} from "./DisplayToModal/Component/modal.component";
import {MatDialog, MatDialogConfig} from "@angular/material";

export class DisplayToModal implements BaseInterface {

    private matDialog: MatDialog = null;

    private properties: any = null;

    // ########################################

    constructor(
        matDialog: MatDialog,
        properties: any
    ) {
        this.matDialog = matDialog;
        this.properties = properties;
    }

    // ########################################

    public process(entity: Entity): void {
        let modalConfig: MatDialogConfig<any> = {
            data: {
                properties: {
                    closing: this.properties ? this.properties['closing'] : true
                }
            },
            disableClose: this.properties ? !this.properties['closing'] : false
        };

        this.matDialog.open(ModalComponent, modalConfig);
    }

    // ########################################
}
