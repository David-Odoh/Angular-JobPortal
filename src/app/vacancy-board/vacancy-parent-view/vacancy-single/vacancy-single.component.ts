import { Component, OnInit } from '@angular/core';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-single',
  templateUrl: './vacancy-single.component.html',
  styleUrls: ['./vacancy-single.component.css']
})
export class VacancySingleComponent implements OnInit {
  vacancyInfos: any;

  constructor(public vacService: VacanciesService, public route: ActivatedRoute) {
    this.getSingleVacancy(this.route.snapshot.params['id'])
  }

  ngOnInit() {
    console.log(this.vacancyInfos)
  }

  getSingleVacancy(id) {
    let page = 1;
    let perPage = 30;
    this.vacService.getSingleVacancy(page, perPage, id).subscribe((_data) => {
      this.vacancyInfos = _data;
      console.log(this.vacancyInfos);
    });
  }
}
