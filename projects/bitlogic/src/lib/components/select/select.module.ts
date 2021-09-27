import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    ButtonModule,
    
  ],
  exports: [
    SelectComponent,
  ]
})
export class SelectModule { }
