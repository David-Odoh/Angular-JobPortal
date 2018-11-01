import { Component, OnInit } from '@angular/core';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { ActivatedRoute } from '@angular/router';
import { VacancyModel } from './../../models/job-vacancy';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  vacancyInfo: any;

  constructor(public vacService: VacanciesService, public route: ActivatedRoute) {
    this.getVacancyDetails(this.route.snapshot.params['id'])
  }

  ngOnInit() {
  }

  getVacancyDetails(id) {
    this.vacancyInfo = this.vacService.getVacancyDetails(id);
  }
}
