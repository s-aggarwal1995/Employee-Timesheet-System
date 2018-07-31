
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {$} from 'jquery';


@Injectable({
  providedIn: 'root'
})
export  class ConstantService {

  
    displayLoader:boolean =false;
  constructor(private http: HttpClient) { }

    hideLoader():any{
     this.displayLoader = false;
    }

    showLoader():any{
      this.displayLoader = true;
    }
 

}
