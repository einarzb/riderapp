import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
