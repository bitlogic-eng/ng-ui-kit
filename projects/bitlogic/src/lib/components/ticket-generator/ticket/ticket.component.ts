import { Component, OnInit, Input } from '@angular/core';

export interface ticketDetails {
  listPrice: number,
  price: number,
  period: string,
  subperiod: string,
  periodId: number,
  details: string
};

export interface ticket {
  id: number,
  listPrice: number,
  price: number,
  details: string,
  period: string,
  discountPrice: number,
  total: number,
  tickets: ticketDetails[]
}

@Component({
  selector: 'bit-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input()
  ticket: ticket;

  @Input()
  open: true;

  constructor() { 
    

    this.ticket = {
          "id": 5,
          "listPrice": 60000,
          "price": 48000,
          "details": "Arancel hasta 3 materias",
          "period": "1/22",
          "discountPrice": 4000,
          "total": 56000,
          "tickets": [
            {
              "listPrice": 20000,
              "price": 16000,
              "period": "1/22",
              "subperiod": "A",
              "periodId": 9200,
              "details": "Matrícula 1/22"
            },
            {
              "listPrice": 40000,
              "price": 32000,
              "period": "1/22",
              "subperiod": "A",
              "periodId": 9200,
              "details": "Arancel B"
            }
          ]
        };
      
    
  }

  ngOnInit(): void {
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