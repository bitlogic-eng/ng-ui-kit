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

  @Output()
  paidTicket: EventEmitter<Ticket> = new EventEmitter();

  selectedTicket: Ticket;
  open: boolean = false;
  buttonPaidDisabled = true;

  constructor() { 
  }

  ngOnInit(): void {
  }

  openTicket() {
    this.open = !this.open;
  }

  onSelectedTicket($event) {
    this.selectedTicket = $event;
    console.log(this.selectedTicket);
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
