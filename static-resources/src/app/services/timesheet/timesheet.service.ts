import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource } from '../../models/resource';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private resourcesUrl = 'http://localhost:8030/getusers';
  private timesheetPostURL = 'http://localhost:8030/posttimesheetdata';
  private exportToExcelURL = 'http://localhost:8030/exporttoexcel';
  private updateManagerURL = 'http://localhost:8030/updateprojectmanagername';
  private clientManagerURL = 'http://localhost:8030/updateclientmanagername';
  private addStakeholderEmailURL = 'http://localhost:8030/addstakeholderemail';
  private deleteStakeholderEmailURL = 'http://localhost:8030/deletestakeholderemail';
  private log;

  constructor(private http:HttpClient) { }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.resourcesUrl).pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  postTimesheet(timesheetArray, selectedResourceVlaue, startDate, endDate, dates, sumOfWeeklyHours, totalHoursOfEachDate): Observable<any> {
    const postedData = { startDate: startDate.toLocaleDateString(), endDate: endDate.toLocaleDateString(), totalHoursForEachDate: totalHoursOfEachDate, dates: dates, totalWeeklyHours: sumOfWeeklyHours, user: selectedResourceVlaue, tasks: timesheetArray };
    return this.http.post(this.timesheetPostURL, postedData, httpOptions).pipe(
      catchError(this.handleError('postTimesheet', []))
    );
  }

  exportToExcel(timesheetArray, selectedResourceVlaue, startDate, endDate, dates, sumOfWeeklyHours, totalHoursOfEachDate): Observable<any> {
    const postedData = { startDate: startDate.toLocaleDateString(), endDate: endDate.toLocaleDateString(), totalHoursForEachDate: totalHoursOfEachDate, dates: dates, totalWeeklyHours: sumOfWeeklyHours, user: selectedResourceVlaue, tasks: timesheetArray };
    return this.http.post(this.exportToExcelURL, postedData, httpOptions).pipe(
      catchError(this.handleError('export Excel', []))
    );
  }


  updateProjectManagerName(Resource: Resource): Observable<any> {
    return this.http.post(this.updateManagerURL, Resource, httpOptions).pipe(
      catchError(this.handleError('updateProjectManagerName', []))
    );
  }

  updateClientManagerName(Resource: Resource): Observable<any> {
    return this.http.post(this.clientManagerURL, Resource, httpOptions).pipe(
      catchError(this.handleError('updateClientManagerName', []))
    );
  }

  addStakeholderEmail(Resource: Resource): Observable<any> {
    return this.http.post(this.addStakeholderEmailURL, Resource, httpOptions).pipe(
      catchError(this.handleError('addStakeholderEmail', []))
    );
  }

  deleteStakeholderEmail(Resource: Resource): Observable<any> {
    return this.http.post(this.deleteStakeholderEmailURL, Resource, httpOptions).pipe(
      catchError(this.handleError('deleteStakeholderEmail', []))
    );
  }

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // downloadFile() {
  //   return this.http1
  //     .get('https://jslim.net/path/to/file/download', {
  //       responseType: ResponseContentType.Blob,
  //     })
  //     // .map(res => {
  //     //   return {
  //     //     filename: 'filename.pdf',
  //     //     data: res.blob()
  //     //   };
  //     // })
  //     .subscribe(response => {
  //         var res= response.blob();
  //         console.log('start download:',res);
  //         var url = window.URL.createObjectURL(res.data);
  //         var a = document.createElement('a');
  //         document.body.appendChild(a);
  //         a.setAttribute('style', 'display: none');
  //         a.href = url;
  //         a.download = res.filename;
  //         a.click();
  //         window.URL.revokeObjectURL(url);
  //         a.remove(); // remove the element
  //       }, error => {
  //         console.log('download error:', JSON.stringify(error));
  //       }, () => {
  //         console.log('Completed file download.')
  //       });
  // }


}
