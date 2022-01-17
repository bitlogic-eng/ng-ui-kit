import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'bit-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input()
  ticket: Ticket;

  @Input()
  enableToOpen: boolean = true;

  @Output()
  selectedTicket: EventEmitter<Ticket> = new EventEmitter();

  open: boolean = false;
  priceCurrency: "'USD':true:'2.2-4'";

  constructor() { 
  }

  ngOnInit(): void {
  }

  openDetail() {
    if(this.enableToOpen) {
      this.open = !this.open;
    } 
  }

  onSelectedTicket() {
    this.selectedTicket.emit(this.ticket);
    this.open = false;
  }
}


// [
//   {
//     "ticketPackageId": 5,
//     "listPrice": 60000,
//     "price": 48000,
//     "ticketDetails": "Arancel hasta 3 materias",
//     "period": "1/22",
//     "discountPrice": 4000,
//     "total": 56000,
//     "tickets": [
//       {
//         "listPrice": 20000,
//         "price": 16000,
//         "period": "1/22",
//         "subperiod": "A",
//         "periodId": 9200,
//         "details": "Matrícula 1/22"
//       },
//       {
//         "listPrice": 40000,
//         "price": 32000,
//         "period": "1/22",
//         "subperiod": "A",
//         "periodId": 9200,
//         "details": "Arancel B"
//       }
//     ]
//   },
//   {
//     "ticketPackageId": 6,
//     "listPrice": 60000,
//     "price": 48000,
//     "ticketDetails": "Arancel hasta 3 materias",
//     "period": "1/22",
//     "discountPrice": 4000,
//     "total": 56000,
//     "tickets": [
//       {
//         "listPrice": 20000,
//         "price": 16000,
//         "period": "1/22",
//         "subperiod": "A",
//         "periodId": 9214,
//         "details": "Matrícula 1/22"
//       },
//       {
//         "listPrice": 40000,
//         "price": 32000,
//         "period": "1/22",
//         "subperiod": "A",
//         "periodId": 9214,
//         "details": "Arancel A"
//       }
//     ]
//   }
// ]