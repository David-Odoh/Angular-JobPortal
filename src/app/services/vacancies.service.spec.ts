import { TestBed } from '@angular/core/testing';

import { VacanciesService } from './vacancies.service';

describe('VacanciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacanciesService = TestBed.get(VacanciesService);
    expect(service).toBeTruthy();
  });
});
