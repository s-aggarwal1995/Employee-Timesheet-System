import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Tasks} from '../../models/tasks';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = `${environment.baseUrl}`;
  private tasksUrl = this.baseUrl + "gettasksdata";
  
  constructor(private http: HttpClient) { }


  getTasks():Observable<Tasks[]>{
    return this.http.get<Tasks[]>(this.tasksUrl).pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
