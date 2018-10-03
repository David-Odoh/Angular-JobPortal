import { Component, OnInit } from '@angular/core';
import { VacanciesService } from './../../services/vacancies.service';
import { VacancyModel } from './../../models/job-vacancy';

@Component({
  selector: 'app-vacancy-listing',
  templateUrl: './vacancy-listing.component.html',
  styleUrls: ['./vacancy-listing.component.css']
})
export class VacancyListingComponent implements OnInit {
  _vacancies: VacancyModel[];
  filterBy: string;

  constructor(public vacService: VacanciesService) { }

  ngOnInit() {
    this.filterBy = this.vacService.getFilter();

    this.vacService.getVacancies().subscribe(
      vacancies => {
        this.vacService.setAllVacancies(vacancies);
        this._vacancies = this.vacService.getAllVacancies();
      },
      err => console.log(err)
    );

    this.vacService.filterTypeEmitter.subscribe(
      (filterValue: string) => {
        this.filterBy = filterValue;
      }
    );
  }

}
