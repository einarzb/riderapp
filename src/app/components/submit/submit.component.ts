import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  pin: string;
  @ViewChild('pinForm') form: any;

  constructor() { }

  ngOnInit() {
   
  }

  onSubmit({value, valid}: {value: pin, valid: boolean}) {
      console.log(value);     
      this.form.reset();
    }
}
