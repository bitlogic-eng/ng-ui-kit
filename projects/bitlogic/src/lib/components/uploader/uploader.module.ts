import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { UploaderFileComponent } from './uploader-file/uploader-file.component';
import { StepperComponent } from './stepper/stepper.component';
import { DropZoneDirective } from './drop-zone.directive';
import { ButtonModule } from '../button/button.module';
import { TableModule } from '../table/table.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
// import { IFile, IStepData } from './models/models';


@NgModule({
  declarations: [UploaderComponent, UploaderFileComponent, StepperComponent, DropZoneDirective],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TableModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [UploaderComponent]
})
export class UploaderModule { }
