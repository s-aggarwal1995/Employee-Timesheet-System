import { Component } from '@angular/core';
import { ConstantService } from './services/constants/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public ConstantService:ConstantService){

  }
}
