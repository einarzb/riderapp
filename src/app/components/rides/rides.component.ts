import { Component, OnInit, ViewChild } from '@angular/core';
import { RideService } from './../../services/ride.service';
import { Ride } from './../../models/Ride';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})

export class RidesComponent implements OnInit {
  rides: Ride[] = [];
  pin: string;
  ride_id: number;
  @ViewChild('pinForm') form: any;


  constructor(private rideService: RideService, private router:Router) {

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
