import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { CalendarModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule } from "@angular/common/http";
import {TimesheetService} from './services/timesheet/timesheet.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReportsComponent } from './reports/reports.component';

import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
 



@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    PagenotfoundComponent,
    ReportsComponent,
    jqxBarGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  providers: [TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
