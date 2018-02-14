import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Ride } from "./../models/Ride";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class RideService {
  rides: Ride[];
  ticketRes = {
    id: 0,
    ride: {
      id: 0,
      zone: {
        id: 0,
        name: "string",
        color: "string"
      },
      name: "string",
      remaining_tickets: 0,
      return_time: "2018-02-13T09:47:42.949Z"
    },
    access_code: "string",
    return_time: "2018-02-13T09:47:42.949Z"
  };

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getRides(): Observable<any> {
    return this.http
      .get<any>(
        "http://fast-rider.herokuapp.com/api/v1/rides?token=d624351447c3d210a922fa846d3c13ce288b7a41cf",
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>()));
  }

  getAccessCode(data): Observable<any> {
    return this.http
      .post<any>(
        "http://fast-rider.herokuapp.com/api/v1/tickets",
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>()));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (err: any): Observable<T> => {
      alert(err.error.message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
