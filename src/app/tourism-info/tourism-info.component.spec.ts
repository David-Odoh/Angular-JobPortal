import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismInfoComponent } from './tourism-info.component';

describe('TourismInfoComponent', () => {
  let component: TourismInfoComponent;
  let fixture: ComponentFixture<TourismInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourismInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
