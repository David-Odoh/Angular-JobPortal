import { Component, OnInit } from '@angular/core';
import { category } from './../models/category';
import { CategoriesService } from './../services/categories.service';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-vacancy-board',
  templateUrl: './vacancy-board.component.html',
  styleUrls: ['./vacancy-board.component.css']
})
export class VacancyBoardComponent implements OnInit {
  _categories: category[];

  constructor(public catService: CategoriesService, public vacService: VacanciesService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe(
      cats => {
        this._categories = cats;
      },
      err => console.log(err)
    );
  }

  setFilter(filterValue: string) {
    this.vacService.setFilter(filterValue);
  }

  resetFilters() {
    this.vacService.setFilter('All');
  }
}
