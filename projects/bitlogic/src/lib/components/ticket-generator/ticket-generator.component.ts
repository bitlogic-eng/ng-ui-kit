import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from './models/ticket';

@Component({
  selector: 'bit-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  styleUrls: ['./ticket-generator.component.scss']
})
export class TicketGeneratorComponent implements OnInit {

  @Input()
  tickets: Ticket[];

  @Input()
  isLoading: boolean = false;

  @Output()
  paidTicket: EventEmitter<Ticket> = new EventEmitter();

  selectedTicket: Ticket;
  buttonPaidDisabled = true;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSelectedTicket($event) {
    this.selectedTicket = $event;
    this.buttonPaidDisabled = false;
  }

  removeTicket() {
    this.selectedTicket = null;
    this.buttonPaidDisabled = true;
  }

  onPaidTicket() {
    this.paidTicket.emit(this.selectedTicket);
  }
}
