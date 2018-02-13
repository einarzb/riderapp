export interface Ride {
  id: number,
  name: string,
  remaining_tickets: number,
  return_time:any,
  zone: {
    id: number,
    name: string,
    color: string
  },
  pin?: string
}