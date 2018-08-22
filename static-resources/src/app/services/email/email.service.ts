import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Password } from 'primeng/primeng';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','responseType': 'text' as 'text'})
};


const options = { responseType: 'text' as 'text'};

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = `${environment.baseUrl}`;
  private emailUrl = this.baseUrl + "getemailtemplate";
  private emailSentUrl = this.baseUrl + "email";
  
  constructor(private http: HttpClient) { }


  getEmailTemplate():Observable<any>{
    return this.http.get(this.emailUrl,options);
  }

  postEmail(username,password,receiver,stakeholders,subject,mailbody):Observable<any>{
    const postedData = {username: username, password: password, receiver: receiver, stakeholders:stakeholders, subject: subject, mailbody: mailbody};

    return this.http.post(this.emailSentUrl,postedData,httpOptions);
  
  }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
