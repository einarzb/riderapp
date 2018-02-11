export interface Ride {
  id: number,
  name: string,
  remainingTickets: number,
  returnTime:any,
  zone: {
    id: number,
    name: string,
    color: string
  },
  pin?: string
}