import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketGeneratorComponent } from './ticket-generator.component';
import { TicketComponent } from './ticket/ticket.component';
import { ButtonModule } from '../button/button.module';


@NgModule({
  declarations: [
    TicketComponent,
    TicketGeneratorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TicketGeneratorComponent
  ],
})
export class TicketGeneratorModule { }
