import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {}
