import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarTemplateComponent } from './snackbar-template.component';

@NgModule({
  // entryComponents: [SnackbarTemplateComponent],
  declarations: [SnackbarComponent, SnackbarTemplateComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    SnackbarComponent
  ]
})
export class SnackbarModule { }
