import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


const options = { responseType: 'text' as 'text'};

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  

  private baseUrl = `${environment.baseUrl}`;
  private sentOtpUrl = this.baseUrl + "sentotp";
  private verifyOtpUrl = this.baseUrl + "verifyotp";
  
  
  constructor(private http: HttpClient) { }


  sendOtp(email):Observable<any>{
    
    let postedData = email;
    return this.http.post(this.sentOtpUrl,postedData,httpOptions);

  }

  validateOtp(userEmail,otp):Observable<any>{
    const postedData = {userEmail: userEmail, otp: otp, expiryTime: ""};

    return this.http.post(this.verifyOtpUrl,postedData,httpOptions);
  
  }
}

