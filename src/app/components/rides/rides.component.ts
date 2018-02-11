import { Component, OnInit } from '@angular/core';
import { Ride } from '../../models/Ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
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
        },
        {
        id: 7,
        zone: {
        id: 2,
        name: "Gibbon Island",
        color: "#e76f68"
        },
        name: "Tropical Rush",
        remainingTickets: 10,
        returnTime: new Date('01/02/2018 08:35:05')
        },
        {
        id: 8,
        zone: {
        id: 2,
        name: "Gibbon Island",
        color: "#e76f68"
        },
        name: "Rings of Black",
        remainingTickets: 40,
        returnTime: new Date('01/02/2018 08:35:05')
        },
        {
        id: 6,
        zone: {
        id: 2,
        name: "Gibbon Island",
        color: "#e76f68"
        },
        name: "Full Moon Coaster",
        remainingTickets: 5,
        returnTime: new Date('01/02/2018 08:35:05')
        }
    ]
  }

}
