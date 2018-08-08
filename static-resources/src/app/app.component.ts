import { Component } from '@angular/core';
import { ConstantService } from './services/constants/constants.service';
import {Router}  from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(public ConstantService:ConstantService, public router:Router){
    this.router.navigateByUrl("/timesheet");
  }
  
}
