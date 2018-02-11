import { Component, OnInit, ViewChild } from '@angular/core';
import { Ride } from '../../models/Ride';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  pin: Ride;
  @ViewChild('pinForm') form: any;

  constructor() { }

  ngOnInit() {
   
  }

  onSubmit({value, valid}: {value: Ride, valid: boolean}) {
      console.log(value);     
      this.form.reset();
    }
}
