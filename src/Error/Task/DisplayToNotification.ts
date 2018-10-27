import {Injectable} from "@angular/core";
import {BaseInterface} from "./BaseInterface";
import {Entity} from "../Entity";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";

@Injectable()
export class DisplayToNotification implements BaseInterface {

    private matSnackBar: MatSnackBar = null;

    private properties: Object = null;

    // ########################################

    constructor(
        matSnackBar: MatSnackBar,
        properties: Object
    ) {
        this.matSnackBar = matSnackBar;
        this.properties = properties;
    }

    // ########################################

    public process(entity: Entity): void {
        let notificationConfig: MatSnackBarConfig = {
            duration: this.properties ? this.properties['duration'] : 2500,
            horizontalPosition: this.properties ? this.properties['horizontalPosition'] : "left",
            verticalPosition: this.properties ? this.properties['verticalPosition'] : "top",
        };

        this.matSnackBar.open(
            this.properties ? this.properties['message'] : 'default message',
            this.properties ? this.properties['action'] : '',
            notificationConfig
        );
    }

    // ########################################
}
