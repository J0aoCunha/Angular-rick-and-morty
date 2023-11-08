import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEpisodesComponent } from './content-episodes.component';

describe('ContentEpisodesComponent', () => {
  let component: ContentEpisodesComponent;
  let fixture: ComponentFixture<ContentEpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentEpisodesComponent]
    });
    fixture = TestBed.createComponent(ContentEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
