import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent }   from './timesheet/timesheet.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: '', redirectTo: '/timesheet', pathMatch: 'full' },
  { path: 'timesheet', component: TimesheetComponent }
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
