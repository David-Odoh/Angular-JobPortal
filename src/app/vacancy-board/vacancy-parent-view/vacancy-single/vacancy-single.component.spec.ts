import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancySingleComponent } from './vacancy-single.component';

describe('VacancySingleComponent', () => {
  let component: VacancySingleComponent;
  let fixture: ComponentFixture<VacancySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
