import { Component, OnInit, ViewChild } from "@angular/core";
import { RideService } from "./../../services/ride.service";
import { Ride } from "./../../models/Ride";
import { Router } from "@angular/router";

@Component({
  selector: "app-rides",
  templateUrl: "./rides.component.html",
  styleUrls: ["./rides.component.css"]
})
export class RidesComponent implements OnInit {
  rides: Ride[] = [];
  pin: string;
  ride_id: number;
  @ViewChild("pinForm") form: any;

  constructor(private rideService: RideService, private router: Router) {}

  ngOnInit() {
    this.rideService.getRides().subscribe(res => {
      for (let i = 0; i < res.length; ++i) this.rides.push(res[i]);
    });
  }

  submitForm() {
    this.rideService
      .getAccessCode({
        ride_id: this.ride_id,
        pin: this.pin,
        token: "d624351447c3d210a922fa846d3c13ce288b7a41cf"
      })
      .subscribe(res => {
        if (res !== undefined) {
          this.rideService.ticketRes = res;
          this.router.navigate(["/ticket"]);
        }
      });
  }

  rideClicked(id, index) {
    this.ride_id = id;
    for (let i = 0; i < this.rides.length; ++i) {
      this.rides[i].isSelected = {};
    }
    this.rides[index].isSelected = {
      "background-color": this.rides[index].zone.color
    };
  }
}
