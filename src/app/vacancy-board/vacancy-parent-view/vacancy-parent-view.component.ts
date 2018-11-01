import { Component, OnInit } from '@angular/core';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancy-parent-view',
  templateUrl: './vacancy-parent-view.component.html',
  styleUrls: ['./vacancy-parent-view.component.css']
})
export class VacancyParentViewComponent implements OnInit {
  vacancyInfo: any;

  constructor(public vacService: VacanciesService, public route: ActivatedRoute, public router: Router) {
    this.getVacancyDetails(this.route.snapshot.params['id'])
  }

  ngOnInit() {
  }

  getVacancyDetails(id) {
    this.vacancyInfo = this.vacService.getVacancyDetails(id);
  }

  navigateToDetailsPage(vacancyId) {
    this.router.navigate([`/job-portal/vacancy-board/job-single/${vacancyId}`]);
  }
}
