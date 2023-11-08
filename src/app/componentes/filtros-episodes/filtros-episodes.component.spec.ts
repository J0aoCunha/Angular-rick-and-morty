import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosEpisodesComponent } from './filtros-episodes.component';

describe('FiltrosEpisodesComponent', () => {
  let component: FiltrosEpisodesComponent;
  let fixture: ComponentFixture<FiltrosEpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosEpisodesComponent]
    });
    fixture = TestBed.createComponent(FiltrosEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
