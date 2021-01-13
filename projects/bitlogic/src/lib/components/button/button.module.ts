import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    // MatIconModule,
    // MatDividerModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
