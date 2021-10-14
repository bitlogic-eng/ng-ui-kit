import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    
  ],
  exports: [
    SelectComponent,
  ]
})
export class SelectModule { }
