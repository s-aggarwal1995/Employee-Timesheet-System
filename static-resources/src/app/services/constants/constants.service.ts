
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConstantService {

    show:boolean= true;
    hide:boolean= false;

  constructor(private http: HttpClient) { }

    
 

}
