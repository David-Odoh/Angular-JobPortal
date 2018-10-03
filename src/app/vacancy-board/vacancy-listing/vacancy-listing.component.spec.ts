import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyListingComponent } from './vacancy-listing.component';

describe('VacancyListingComponent', () => {
  let component: VacancyListingComponent;
  let fixture: ComponentFixture<VacancyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
