import { VacanciesService } from './../services/vacancies.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vacancy-search',
  templateUrl: './vacancy-search.component.html',
  styleUrls: ['./vacancy-search.component.css']
})
export class VacancySearchComponent implements OnInit {
  preloadedVacancies = [];
  searchText: string;

  constructor(public vacService: VacanciesService) { }

  ngOnInit() {
    if (this.vacService.getAllVacancies()) {
      console.log('efficient data reuse')
      this.preloadedVacancies = this.vacService.getAllVacancies();
    } else {
      console.log('fetched data afresh')
      this.vacService.getVacancies().subscribe(
        vacancies => {
          this.vacService.setAllVacancies(vacancies);
          this.preloadedVacancies = this.vacService.getAllVacancies();
        },
        err => console.log(err)
      );
    }
  }

  setSearchFilter(searchText: string) {
    console.log(searchText)
    this.vacService.searchFilter(searchText);
  }

  resetFilters() {
    this.vacService.searchFilter('');
  }
}
