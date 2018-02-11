import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from './../../models/Ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})

export class RidesComponent implements OnInit {
  // rides: Ride[];
  rides = '';
  stripColor:{};
  selectedColor:{};

  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
    this.http.get('http://fast-rider.herokuapp.com/api/v1/rides?token=d624351447c3d210a922fa846d3c13ce288b7a41cf').subscribe(data => {
      console.log(data);
    });
  
    // this.rides = [
    //   {
    //     id: 9,
    //     zone: {
    //     id: 2,
    //     name: "Gibbon Island",
    //     color: "#e76f68"
    //     },
    //     name: "Treetop Adventure",
    //     remainingTickets: 30,
    //     returnTime: new Date('01/02/2018 08:35:05')
    //     },
    //     {
    //     id: 7,
    //     zone: {
    //     id: 2,
    //     name: "Gibbon Island",
    //     color: "#e76f68"
    //     },
    //     name: "Tropical Rush",
    //     remainingTickets: 10,
    //     returnTime: new Date('01/02/2018 08:35:05')
    //     },
    //     {
    //     id: 8,
    //     zone: {
    //     id: 2,
    //     name: "Gibbon Island",
    //     color: "#e76f68"
    //     },
    //     name: "Rings of Black",
    //     remainingTickets: 40,
    //     returnTime: new Date('01/02/2018 08:35:05')
    //     },
    //     {
    //     id: 6,
    //     zone: {
    //     id: 2,
    //     name: "Gibbon Island",
    //     color: "#e76f68"
    //     },
    //     name: "Full Moon Coaster",
    //     remainingTickets: 5,
    //     returnTime: new Date('01/02/2018 08:35:05')
    //     }
    // ];
    this.setColor();
  }

  setColor() {
    // this.stripColor = {
    //   'background-color': this.rides.zone.color
    // }
    // this.selectedColor = {
    //   'background-color': this.rides.zone.color
    // }
  }
}
