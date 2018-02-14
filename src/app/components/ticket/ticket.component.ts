import { Component, OnInit } from '@angular/core';
import { Ride } from './../../models/Ride';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  rides:{} [] = [];

  constructor(private rideService : RideService) { 
      this.rides.push(this.rideService.ticketRes)
  }

  ngOnInit() {
    
  }

}
