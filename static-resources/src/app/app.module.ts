import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { CalendarModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule } from "@angular/common/http";
import {TimesheetService} from './services/timesheet/timesheet.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
