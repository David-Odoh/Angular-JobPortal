import { VacancyModel } from './../models/job-vacancy';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(vacancies: VacancyModel[], subcat: string): any {
    if (subcat === 'All') {
      return vacancies;
    } else {
      if (vacancies) {
        return vacancies.filter(vacancy => {
          return vacancy.category.subcat.subcatName === subcat;
        });
      }
    }
  }
}
