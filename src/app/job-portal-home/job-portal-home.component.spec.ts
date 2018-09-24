import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPortalHomeComponent } from './job-portal-home.component';

describe('JobPortalHomeComponent', () => {
  let component: JobPortalHomeComponent;
  let fixture: ComponentFixture<JobPortalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPortalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPortalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
