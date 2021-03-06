import { VacancyModel } from './../models/job-vacancy';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  filterTypeEmitter = new EventEmitter<string>(); // Emit when filtering through Vacancy Categories
  searchEmitter = new EventEmitter<string>();

  private allVacancies: VacancyModel[];
  private selectedVacancy: VacancyModel;
  private filterBy = 'All';
  private search = '';

  // BASE_URL = 'assets/data';
  BASE_URL = 'http://localhost:5000/v1';


  public constructor(private http: HttpClient) {
  }

  setAllVacancies(fetchedVacancies: any[]) {
    this.allVacancies = fetchedVacancies;
  }

  getAllVacancies() {
    if (this.allVacancies) return this.allVacancies.slice();
    return [];
  }

  getVacancies(page = 1, perPage = 30): Observable<any> {
    return this.http.get(`${this.BASE_URL}/vacancy/parents?page=${page}&perPage=${perPage}`)
      .pipe(
      map(res => {
        console.log('vacancies', res);
        return res
      }),
      catchError(this.handleError)
      );
  }

  getSingleVacancy(page = 1, perPage = 30, id) {
    return this.http.get(`${this.BASE_URL}/vacancy/single?page=${page}&perPage=${perPage}&id=${id}`)
      .pipe(
      map(res => {
        console.log('vacancy', res);
        return res
      }),
      catchError(this.handleError)
      );
  }

  getVacancyDetails(id: string) {
    // return this.http.get(`${this.BASE_URL}/vacancies.json/${id}`)
    //   .pipe(
    //   map(res => { return res }),
    //   catchError(this.handleError)
    //   );
    const _vacancies = this.getAllVacancies().slice();

    if (id) {
      console.log(_vacancies.find(vac => vac._id == id));
      const result = _vacancies.find(vac => vac._id == id)
      return result;
    }
    return null;
  }

  setFilter(filterValue: string) {
    this.filterBy = filterValue;
    this.filterTypeEmitter.emit(this.filterBy);
  }

  getFilter() {
    return this.filterBy;
  }

  searchFilter(searchValue: string) {
    this.search = searchValue;
    this.searchEmitter.emit(this.search);
  }

  getSearchFilter() {
    return this.search;
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
        return throwError('Resource Not Found!');
      }
    }
    return throwError('Oops, unable to complete! please try again later.');
  }
}
