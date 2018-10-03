import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap, } from 'rxjs/operators';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  BASE_URL = 'assets/data';
  constructor(private http: HttpClient) { }


  // GET: ALL COOPERATIVES
  getCategories(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/categories.json`)
      .pipe(
      map(res => { return res }),
      catchError(this.handleError)
      );
  }

  // HANDLE ALL ERRORS
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${error.error}`);
      if (error.status == 404) {
        return throwError('Vendor Not Found!');
      }
      if (error.status == 409) {
        return throwError('Vendor is Already Registered!');
      }
    }
    return throwError('Oops, unable to complete! please try again later.');
  }
}