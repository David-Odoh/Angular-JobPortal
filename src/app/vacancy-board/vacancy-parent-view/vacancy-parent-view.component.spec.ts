import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyParentViewComponent } from './vacancy-parent-view.component';

describe('VacancyParentViewComponent', () => {
  let component: VacancyParentViewComponent;
  let fixture: ComponentFixture<VacancyParentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyParentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyParentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
