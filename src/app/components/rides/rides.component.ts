import { Component, OnInit, ViewChild } from '@angular/core';
import { RideService } from './../../services/ride.service';
import { Ride } from './../../models/Ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})

export class RidesComponent implements OnInit {
  rides: Ride[];
  pin: Ride;
  @ViewChild('pinForm') form: any;


  constructor(private rideService: RideService) {

   }

  ngOnInit() {
    // this.rideService.getRides().subscribe(rides => 
    //   this.rides = rides);
  }

  onSubmit({value, valid}: {value: Ride, valid: boolean}) {
    console.log(value);     
    this.form.reset();
  }
}
