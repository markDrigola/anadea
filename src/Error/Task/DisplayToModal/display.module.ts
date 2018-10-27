import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "./Component/modal.component";
import {MaterialModule} from "../../../../public/material.module";

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    entryComponents: [ModalComponent]
})
export class DisplayModule { }