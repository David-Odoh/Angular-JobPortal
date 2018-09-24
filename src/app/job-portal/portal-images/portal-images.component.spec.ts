import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalImagesComponent } from './portal-images.component';

describe('PortalImagesComponent', () => {
  let component: PortalImagesComponent;
  let fixture: ComponentFixture<PortalImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
