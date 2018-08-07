import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent }   from './timesheet/timesheet.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: 'timesheet', component: TimesheetComponent },
  { path: '', redirectTo: '/timesheet', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
