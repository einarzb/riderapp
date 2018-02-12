import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '/ticket:pin', component: TicketComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
