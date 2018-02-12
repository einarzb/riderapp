import { Component, OnInit } from '@angular/core';
import { Ride } from './../../models/Ride';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  rides: Ride[];

  constructor() { }

  ngOnInit() {
    this.rides = [
      {
        id: 9,
        zone: {
        id: 2,
        name: "Gibbon Island",
        color: "#e76f68"
        },
        name: "Treetop Adventure",
        remainingTickets: 30,
        returnTime: new Date('01/02/2018 08:35:05')
        }
      ]
  }

}
