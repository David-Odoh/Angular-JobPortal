import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancySearchComponent } from './vacancy-search.component';

describe('VacancySearchComponent', () => {
  let component: VacancySearchComponent;
  let fixture: ComponentFixture<VacancySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
