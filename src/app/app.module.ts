import { RideService } from './services/ride.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { RidesComponent } from './components/rides/rides.component';
import { AppRoutingModule } from './/app-routing.module';
import { TicketComponent } from './components/ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InstructionsComponent,
    RidesComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
