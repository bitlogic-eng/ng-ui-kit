
import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'bit-snackbar-template',
  templateUrl: './snackbar-template.component.html',
  styleUrls: ['./snackbar-template.component.scss'],
})
export class SnackbarTemplateComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data,
    public snackRef: MatSnackBarRef<SnackbarTemplateComponent>) {
    }

  dismiss() {
    this.snackRef.dismissWithAction();
  }
}
