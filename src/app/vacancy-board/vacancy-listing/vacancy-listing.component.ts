import { Component, OnInit } from '@angular/core';
import { VacanciesService } from './../../services/vacancies.service';
import { VacancyModel } from './../../models/job-vacancy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancy-listing',
  templateUrl: './vacancy-listing.component.html',
  styleUrls: ['./vacancy-listing.component.css']
})
export class VacancyListingComponent implements OnInit {
  _vacancies: VacancyModel[];
  filterBy: string;

  constructor(public vacService: VacanciesService, public router: Router) { }

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

  checkForChildrenB4Routing(children, _id) {
    if (children.length) {
      console.log('Has children', children);
      this.router.navigate([`/job-portal/vacancy-board/job-collection/${_id}`]);
    } else {
      console.log('Doesnt have children');
      this.router.navigate([`/job-portal/vacancy-board/job-details/${_id}`]);
    }
  }

}
