import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersLocationsComponent } from './filters-locations.component';

describe('FiltersLocationsComponent', () => {
  let component: FiltersLocationsComponent;
  let fixture: ComponentFixture<FiltersLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersLocationsComponent]
    });
    fixture = TestBed.createComponent(FiltersLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
