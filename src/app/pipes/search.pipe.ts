import { Pipe, PipeTransform } from '@angular/core';
import { VacancyModel } from './../models/job-vacancy';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(vacancies: VacancyModel[], searchText: string): any {
    if (!vacancies) { return []; }
    if (!searchText) { return vacancies; }
    else {
      if (vacancies) {
        return vacancies.filter(vacancy => {
          return vacancy.title.toLowerCase().includes(searchText)
        });
      }
    }
  }
}
