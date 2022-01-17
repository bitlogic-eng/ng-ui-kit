export interface TicketDetails {
  listPrice: number,
  price: number,
  period: string,
  subperiod: string,
  periodId: number,
  details: string
};

export interface Ticket {
  id: number,
  listPrice: number,
  price: number,
  details: string,
  period: string,
  discountPrice: number,
  total: number,
  tickets: TicketDetails[]
}
