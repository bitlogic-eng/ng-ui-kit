import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DarwinStepperComponent } from '../darwin-stepper/darwin-stepper.component';

interface ModuleData {
  okText: string;
  cancelText: string;
  errors?: number;
}

@Component({
  selector: 'app-darwin-confirmation',
  templateUrl: './darwin-confirmation.component.html',
  styleUrls: ['./darwin-confirmation.component.scss']
})
export class DarwinConfirmationComponent {
  public title;
  public subtitle;

  constructor(
    public dialogRef: MatDialogRef<DarwinStepperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModuleData
  ) {
    this.data = data;
    this.title = 'title.darwinConfirmation';
    this.subtitle = 'subtitle.darwinConfirmation';
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onOkClick(): void {
    this.dialogRef.close(true);
  }

}
