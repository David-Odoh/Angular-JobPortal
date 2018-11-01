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
        console.log('Filter vals', vacancies);
        console.log('Filter val', subcat);

        return vacancies.filter(vacancy => {
          return vacancy.subcat.subcatName === subcat;
        });
      }
    }
  }
}
