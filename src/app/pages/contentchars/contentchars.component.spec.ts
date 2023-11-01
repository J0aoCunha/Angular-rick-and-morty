import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcharsComponent } from './contentchars.component';

describe('ContentcharsComponent', () => {
  let component: ContentcharsComponent;
  let fixture: ComponentFixture<ContentcharsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentcharsComponent]
    });
    fixture = TestBed.createComponent(ContentcharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
