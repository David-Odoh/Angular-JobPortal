import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAdsComponent } from './top-ads.component';

describe('TopAdsComponent', () => {
  let component: TopAdsComponent;
  let fixture: ComponentFixture<TopAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
