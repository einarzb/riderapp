import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Ride } from './../models/Ride';

@Injectable()
export class RideService {
  rides:Ride[];

constructor(private http:HttpClient) { 
  this.http = http;
}

getRides() {
  return this.http.get<Ride>('http://fast-rider.herokuapp.com/api/v1/rides?token=d624351447c3d210a922fa846d3c13ce288b7a41cf').map(data => {
    console.log(data);
    console.log(data[3].name);
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Client-side error occured.");
    } else {
      console.log("Server-side error occured.");
    }
  });
}
}