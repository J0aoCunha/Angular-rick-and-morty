import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLocationsComponent } from './content-locations.component';

describe('ContentLocationsComponent', () => {
  let component: ContentLocationsComponent;
  let fixture: ComponentFixture<ContentLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentLocationsComponent]
    });
    fixture = TestBed.createComponent(ContentLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
