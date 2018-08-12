
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export  class ConstantService {

  
  displayLoader:boolean;
  
  constructor(private http: HttpClient) { }

    hideLoader():any{
     this.displayLoader = false;
    }

    showLoader():any{
      this.displayLoader = true;
    }
 

}
