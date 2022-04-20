import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportFileComponent } from './import-file.component';
import { ButtonModule } from '../button/button.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ImportFileComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule  
  ],
  exports: [ImportFileComponent]
})
export class ImportFileModule { }
