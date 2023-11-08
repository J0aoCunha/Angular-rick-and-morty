import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEpisodesComponent } from './card-episodes.component';

describe('CardEpisodesComponent', () => {
  let component: CardEpisodesComponent;
  let fixture: ComponentFixture<CardEpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEpisodesComponent]
    });
    fixture = TestBed.createComponent(CardEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
