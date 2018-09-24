import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyBoardComponent } from './vacancy-board.component';

describe('VacancyBoardComponent', () => {
  let component: VacancyBoardComponent;
  let fixture: ComponentFixture<VacancyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
