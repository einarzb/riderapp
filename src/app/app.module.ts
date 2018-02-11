import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { SearchComponent } from './components/search/search.component';
import { RidesComponent } from './components/rides/rides.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InstructionsComponent,
    SearchComponent,
    RidesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
