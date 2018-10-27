import {
    Component,
    Inject,
    Input,
} from "@angular/core";
import {OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
    selector: 'error-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    public modalProperties = {
        closing: null
    };

    // ########################################

    constructor(
        public dialogRef: MatDialogRef<ModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    public onCloseModalDialog(): void {
        this.dialogRef.close();
    }

    // ########################################

    public ngOnInit(): void {
        this.modalProperties = {
            closing: this.data.properties.closing
        }
    }

    // ########################################
}
