import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketGeneratorComponent } from './ticket-generator.component';
import { TicketComponent } from './ticket/ticket.component';
import { ButtonModule } from '../button/button.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TicketComponent,
    TicketGeneratorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    TicketGeneratorComponent
  ],
})
export class TicketGeneratorModule { }
