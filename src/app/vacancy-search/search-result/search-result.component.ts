import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() preloadedVacancies;
  searchText: string;

  constructor(public vacService: VacanciesService) { }

  ngOnInit() {
    this.vacService.searchEmitter.subscribe(
      (searchValue: string) => {
        this.searchText = searchValue;
      }
    );
  }

}
