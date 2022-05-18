import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportFileComponent } from './import-file.component';
import { ImportFileErrorDialogComponent } from './import-file-errorDialog.component';
import { ButtonModule } from '../button/button.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ImportFileComponent, ImportFileErrorDialogComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule  
  ],
  exports: [ImportFileComponent]
})
export class ImportFileModule { }
